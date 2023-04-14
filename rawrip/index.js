// does not import modules to my knowledge
// example of a valid url: https://example.com/?rawRipURL=
// put script tag in containing element
if (document.currentScript) {
  let rawRiparams = new URLSearchParams(document.currentScript.src.search);
  let rawRippedURL = atob(rawRiparams.get("rawRipURL"));
  let thisRawScript = doument.currentScript;
  let rawTarget = getAttribute("rawRipTarget");
} else {}
function htmlRip() {
  fetch(rawRippedURL)
  .then((result) => {return result.text();})
  .then((rippedCode) => {rawTarget.innerHTML = rippedCode;}); 
}
htmlRip();
