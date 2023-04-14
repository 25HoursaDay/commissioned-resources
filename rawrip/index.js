// does not import modules to my knowledge
// put script tag in containing element  
  let rawRipars = new URLSearchParams(document.currentScript.src.search);
  let rawRippedURL = atob(rawRipars.get("rawRipURL"));
  let thisRawScript = doument.currentScript;

function htmlRip() {
  fetch(rawRippedURL)
  .then((result) => {return result.text();})
  .then((rippedCode) => {return rippedCode;}); 
}
