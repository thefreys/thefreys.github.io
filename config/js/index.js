export const siteConfig = {
    siteName: 'The Freys',
    contentPathPrefix: 'content',
    hamburgerLevelOneItems: ['/recipes','/upcycling','/blogs','/sitemap'],
    tree: [
        {
          text: "Inbox",
          icon: "bi-folder",
          href: "#",
          nodes: [
            {
              text: "Office",
              icon: "bi-folder",href: "#",
              nodes: [
                {
                  icon: "bi-folder",href: "#",
                  text: "Customers"
                },
                {
                  icon: "bi-folder",href: "#",
                  text: "Co-Workers"
                }
              ]
            },
            {
              icon: "bi-folder",href: "#",
              text: "Others"
            }
          ]
        }
      ]
};