var _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '`+reason+`'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
`;

var override = "no";
var reason = "Prevented";
var ogContent = window.self.location;
var contentOwner = "unset";

// file protection
if (_25embedOptions.allowFileHost == "e") {} else {
  
if (window.top.location.startsWith("file:") && contentOwner = "unset") {var contentOwner = "no"; var override = "yes"; var reason = "Content is embedded on a file URL.";} else {}  
  
if (window.self.location.startsWith("file:") && contentOwner = "unset") {var contentOwner = "no"; var override = "yes"; var reason = "Content is hosted on a file URL.";} else {}
}

// check if the source content is NOT the top element
if (window.self != window.top && override = "no") {
  
// check if the referrer of the page is NOT the owner of the source content
  if (!document.referrer.includes(self.location) && override = "no") {
    
// check if the source content owner is embedding the source content and if so, check if the "allowSameHost" setting is enabled. 
    if (window.self.location.hostname == window.top.location.hostname && override = "no") {
      if (_25embedOptions.allowSameHost == "e") {var contentOwner = "no"; var reason = "Same host, different URL.";} else {var contentOwner = "yes"; var override = "yes";}
      check();
      } else {var reason = "The embedded content does not belong to this website.";}
    } else {var contentOwner = "yes"; var override = "yes";}
  } else {var contentOwner = "yes"; var override = "yes";}

function check() {
  if (contentOwner != "yes") {
    if (contentOwner = "no") {
      if (_25embedOptions.rickRoll == "e") {rick();} else {document.write(_25HoursaDay_on_github);}
    }
  }
}
function ogSrc() {window.open(ogContent);}
function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}
function rick() {document.write(`<video width="100%" height="100%" autoplay loop>
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-720p.mp4" type="video/mp4">
<source src="https://25hoursaday.github.io/commissioned-resources/25Embed/rickroll-360p.mp4" type="video/mp4">
<source src="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/rickroll-360p.mp4" type="video/mp4">
</video>
`
);}

