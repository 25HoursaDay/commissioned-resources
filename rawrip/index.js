// put script tag in containing element  
  let rawParams = new URLSearchParams(document.currentScript.src.search);
  let exportURL = rawParams.get("exportURL");
  let thisScr = doument.currentScript;

function htmlRip(url) {
  fetch(url)
  .then((result) => {return result.text();})
  .then((exportCode) => {return exportCode;}); 
}
