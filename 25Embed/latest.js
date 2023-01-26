
// 0 is disabled, 1 is enabled
const _25embedOptions = {
rickRoll:0,
allowSameHost:1
};
const _25embedAllowedUrls = {};

const _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
`;
var override = false;
if (window.self.location.startsWith("file:") && override == false) {
if (_25embedOptions.allowFileUrls == 0) {var contentOwner = false;}else{var contentOwner = true; var override = true;}
}
  
// check if the source content is NOT the top element
if (window.self != window.top && override == false) {
    console.log("window.self != window.top");
  
// check if the referrer of the page is the owner of the source content or not
  if (!document.referrer.includes(self.location) && override == false) {
      console.log("!document.referrer.includes(self.location)");
    
// check if the source content owner is embedding the source content and if so, check if the "allowSameHost" setting is enabled. 
    if (window.self.location.hostname == window.top.location.hostname && override == false) {if (_25embedOptions.allowSameHost == 1) {var contentOwner = true;} else {var contentOwner = false;}            
      } else {var contentOwner = false;}
    } else {var contentOwner = true;}
  } else {var contentOwner = true;}


if (contentOwner != true) {
  console.log("contentOwner != true");
  if (contentOwner == false) {
    console.log("contentOwner == false");
    if (_25embedOptions.rickRoll == 1) {rick();} else {var ogContent = window.self; document.querySelector("html").innerHTML = _25HoursaDay_on_github;}
  }
}

function ogSrc() {window.open(ogContent);}
function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/tree/main/25Embed");}
function rick() {document.querySelector("html").innerHTML = `<video width="100%" height="100%" autoplay loop>
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-360p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-360p.mp4" type="video/mp4">
</video>
`}

