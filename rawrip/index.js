// dont forget to add type="module" to your script tag
  let rawParams = new URLSearchParams(document.currentScript.src.search);
  let exportURL = rawParams.get("exportURL");
  export {decodeURIComponent(exportURL)};
  export {decodeURIComponent(exportCode)};
