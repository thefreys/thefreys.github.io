const promiseAllAllocations = this.axios.get(this.$config[process.env.VUE_APP_ENV].app.base+'data/json/all-allocations.json'); 
const promisePortalAliases = this.axios.get(this.$config[process.env.VUE_APP_ENV].app.base+'data/json/portal-allocations.json');
const promiseStatus = this.axios.get(this.$config[process.env.VUE_APP_ENV].app.base+'data/json/site-status.json');
Promise.all([promiseAllAllocations, promisePortalAliases, promiseStatus])
.then(response => {	                   
    this.siteStatus.status = response[2].data[0].SITE_STATUS;                             
    this.siteStatus.message = response[2].data[0].SITE_MESSAGE;
    if (response[0].data.error) {
        this.$parent.setAlert(true, response[0].data.error, 'alert-danger');
        this.loading = false;
        return;
    }
    this.loading = false;                               	
    this.otherAllocations = response[0].data;

    //Add
    for (var i = 0; i < response[1].data.length; i++) {
        if (response[1].data[i].PORTAL_IND == 'Y') {
            this.portalAreas.push(response[1].data[i]);
        }
    }
    this.areas = response[1].data;
    this.areasLoading = false;
    this.uw = this.areas.filter(u => {
        return u.CAMPAIGN_ALIAS == this.uwAlias;
    })[0]; //University-wide allocations   
    this.featured.greatestNeeds = this.uw.CATEGORIES[0].ALLOCATIONS.find(a => a.ALLOCATION_CODE == '149435');
    this.featured.diversity = this.uw.CATEGORIES[0].ALLOCATIONS.find(a => a.ALLOCATION_CODE == '149186');                
    this.featured.extraordinary = this.uw.CATEGORIES[0].ALLOCATIONS.find(a => a.ALLOCATION_CODE == '147328');

    for (var i = 0; i < this.otherAllocations.length; i++) {                                               
        if (this.cart.funds.some(a => a.ALLOCATION_CODE == this.otherAllocations[i].ALLOCATION_CODE)) {
            this.$set(this.otherAllocations[i], 'inCart', true);                            
        } else {                                        
            this.$set(this.otherAllocations[i], 'inCart', false);
        }                    
    }                
    for (var i = 0; i < this.uw.CATEGORIES[0].ALLOCATIONS.length; i++) {                                               
        if (this.cart.funds.some(a => a.ALLOCATION_CODE == this.uw.CATEGORIES[0].ALLOCATIONS[i].ALLOCATION_CODE)) {
            this.$set(this.uw.CATEGORIES[0].ALLOCATIONS[i], 'inCart', true);                            
        } else {                                        
            this.$set(this.uw.CATEGORIES[0].ALLOCATIONS[i], 'inCart', false);
        }                    
    }

    if (this.cart.other === true && this.cart.otherDesc.trim() > '') {
        this.otherVisible = true;
        this.otherDesc = this.cart.otherDesc;
    }

    //Set allocation school
    if (this.$route.params.area) {
        this.$route.params.area = this.$route.params.area.toLowerCase();                    
        this.area = this.areas.filter(a => {
            return a.CAMPAIGN_ALIAS == this.$route.params.area+'/';
        })[0];                    
        if (this.area) {  
            this.subArea = {'isSubArea': true, 'area': this.area};                           
            this.loadAliasFunds(this.area);
        } else {
            this.$router.replace('/');
        }
    }
});