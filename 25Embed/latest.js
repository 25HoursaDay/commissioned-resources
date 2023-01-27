const _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '`+reason+`'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
`;

var override = false;
var reason = "Prevented";

// file protection
if (_25embedOptions.allowFileHost == 1) {} else {
  
if (window.top.location.startsWith("file:") && override == false) {var contentOwner = false; var override = true; var reason = "Content is embedded on a file URL."; console.log("_25embedOptions.allowFileHost == 0");} else {}  
  
if (window.self.location.startsWith("file:") && override == false) {var contentOwner = false; var override = true; var reason = "Content is hosted on a file URL."; console.log("_25embedOptions.allowFileHost == 0");} else {}
}

// check if the source content is NOT the top element
if (window.self != window.top && override == false) {
    console.log("window.self != window.top");
  
// check if the referrer of the page is NOT the owner of the source content
  if (!document.referrer.includes(self.location) && override == false) {
      console.log("!document.referrer.includes(self.location)");
    
// check if the source content owner is embedding the source content and if so, check if the "allowSameHost" setting is enabled. 
    if (window.self.location.hostname == window.top.location.hostname && override == false) {
      if (_25embedOptions.allowSameHost == 0) {var contentOwner = false; var reason = "Same host, different URL."; console.log("_25embedOptions.allowSameHost == 0");} else {var contentOwner = true; var override = true;}
      } else {var reason = "The embedded content does not belong to this website."; console.log("window.self != window.top && !document.referrer.includes(self.location)");}
    } else {var contentOwner = true; var override = true;}
  } else {var contentOwner = true; var override = true;}


if (contentOwner != true) {
  console.log("contentOwner != true");
  if (contentOwner == false) {
    console.log("contentOwner == false");
    if (_25embedOptions.rickRoll == 1) {rick();} else {var ogContent = window.self; document.querySelector("html").innerHTML = _25HoursaDay_on_github;}
  }
}

function ogSrc() {window.open(ogContent);}
function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}
function rick() {document.innerHTML = `<video width="100%" height="100%" autoplay loop>
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-360p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-360p.mp4" type="video/mp4">
</video>
<script>console.log("rickroll deployed");</`+`script>`
}

