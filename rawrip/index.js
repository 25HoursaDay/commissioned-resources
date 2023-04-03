// put script tag in containing element  
let rawParams = new URLSearchParams(document.currentScript.src.search);
  let exportURL = rawParams.get("exportURL");
  let thisScr = doument.currentScript;
  let gssuh = document.createElement("");

fetch(decodeURIComponent(exportURL))
  .then((result) => { return result.text();})
  .then((exportCode) => { thisScr.after(exportCode);}); 
