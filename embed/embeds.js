// 0 is disabled, 1 is enabled

const _25embedOptions = {
rickRoll:0,

};
const _25HoursaDay_on_github = `
  <style>
 html {
  text-align:center;
  font-weight:bold;
  font-family:sans serif;
  background-color:#000000;
  color:blue;
  } 
 button {
  border:4px solid blue;
  border-radius:20px;
  color:blue;
  background-color:black;
  padding:10px;
  font-size:20px;
  font-weight:bold;
  box-shadow:blue 0px 0px 15px
  }
  </style>
  <h1>This embed has been prevented.</h1>
  <button id="ogSrc" onclick="ogSrc()">Original Content</button>
  <button id="repo" onclick="repo()">More Information</button>
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

