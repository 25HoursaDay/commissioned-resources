import {importURL} from "";
fetch(importURL)
  .then((result) => { return result.text(); })
  .then((content) => { document.write(content); });
