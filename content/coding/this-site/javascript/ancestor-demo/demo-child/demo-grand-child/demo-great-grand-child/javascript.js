console.log(import.meta.url);
document.getElementById('ancestor-demo-code').innerHTML = window.nodeInformation.request.javascript;
document.getElementById('ancestor-demo-node-info').innerHTML = JSON.stringify(window.nodeInformation, null, 2);
