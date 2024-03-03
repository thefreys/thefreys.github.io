import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';
if(window.nodeInformation.request.html>' '){
    const referenceElement = document.getElementById("nodeHtml");
    const newDIV = document.createElement("div");
    const newP = document.createElement("p");
    const newPRE = document.createElement("pre");
    const newCODE = document.createElement("code");

    newP.textContent = 'HTML Code for above';

    newCODE.innerHTML = hljs.highlight(window.nodeInformation.request.html, {language: 'html'}).value;

    newDIV.appendChild(newP);
    newDIV.appendChild(newPRE);
    newPRE.appendChild(newCODE);
    referenceElement.after(newDIV);
}