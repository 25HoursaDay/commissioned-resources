// dont forget to add type="module" to your script tag
  let rawParams = new URLSearchParams(document.currentScript.src.search);
  let exportURL = rawParams.get("exportURL");

fetch(decodeURIComponent(exportURL))
  .then((result) => { return result.text();})
  .then((exportCode) => { document.currentScript.after(exportCode); }); 
  

  export {decodeURIComponent(exportURL)};
  export {decodeURIComponent(exportCode)};
