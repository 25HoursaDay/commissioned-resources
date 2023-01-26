// 0 is disabled, 1 is enabled

const _25embedOptions = {
rickRoll:0,

};
const _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/embed/style.css" rel="stylesheet" type="text/css"/>
  <h1 id="titleMsg" class="titleMsg">This embed has been prevented.</h1>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
`

if (window.self != window.top) {
  if (!document.referrer.includes(self.location)) {
      if (_25embedOptions.rickRoll == 1) {rick()} else {
    var ogContent = window.self;
    document.querySelector("html").innerHTML = _25HoursaDay_on_github;
    }
  }
}

function ogSrc() {window.open(ogContent);}
function repo() {}
function rick() {document.querySelector("html").innerHTML = `<video width="100%" height="100%" autoplay loop>
<source src="https://25hoursaday.github.io/commissioned-resources/embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://25hoursaday.github.io/commissioned-resources/embed/rickroll-360p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/embed/rickroll-360p.mp4" type="video/mp4">
</video>
`}

