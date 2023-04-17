// does not import modules to my knowledge
// example of a valid url: https://example.com/?rawRipURL=
// put script tag in containing element
// example: <script src="link to rawRip" ripTar="url of page to rip" ripLoc="location to put the ripped page"></script>
if (document.currentScript) {
  let rawRip = document.currentScript;
  let rawRipTar = rawRip.getAttribute("ripTar");
  let ripLoc = rawRip.getAttribute("ripLoc");

function htmlRip() {
  fetch(rawRipTar)
  .then((result) => {return result.text();})
  .then((rippedCode) => {ripLoc.innerHTML = rippedCode;}); 
}
htmlRip();
} else {}
