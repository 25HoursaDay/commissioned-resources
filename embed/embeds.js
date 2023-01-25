const _25HoursaDay_on_github = `
  <style></style>
  <h1>This embed prevented.</h1><br>
  <button onclick="ogSrc()"></button>
  <button onclick="repo()"></button>
`

if (window.self != window.top) {
  if (!document.referrer.includes(self.location)) {
    
    document.querySelector("html").innerHTML = _25HoursaDay_on_github;
    
  }
}

function ogSrc() {}
function repo() {}
function rick() {document.querySelector("html").innerHTML = `<video width="100%" height="100%" autoplay>

<source src="https://25hoursaday.github.io/commissioned-resources/embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://25hoursaday.github.io/commissioned-resources/embed/rickroll-360p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/embed/rickroll-360p.mp4" type="video/mp4">

    

</video>
`}

// 0 is disabled, 1 is enabled

const embedOptions = {
"rickRoll":"0",

};
