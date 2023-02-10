var reason = "Prevented";
var ogContent = self.location;
var contentOwner = "u";
if (_25embedOptions.allowFileHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("file:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a file URL."; _25embedLaunch();
  }
}
if (_25embedOptions.allowDataHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("data:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a data URL."; _25embedLaunch();
  }
}
if (_25embedOptions.allowBlobHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("blob:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a blob URL."; _25embedLaunch();
  }
}

if (contentOwner == "u") {
  if (_25embedOptions.allowSameHost == "y") {
    if (window.self.location.hostname == window.top.location.hostname) {var contentOwner = "y";
    } else {var contentOwner = "n"; var reason = "Original content not hosted on this webpage."; _25embedLaunch();}
  }
}
if (contentOwner == "u") {
  if (window.self != window.top) {
    var contentOwner = "n"; var reason = "The embedded content does not belong to this website."; _25embedLaunch();
  } else {var contentOwner = "y";}
}
var _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '` + reason + `'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  </div>
`;
function _25embedLaunch() {
    if (contentOwner != "y") {
      if (contentOwner != "u") {
        if (contentOwner == "n") {
          if (_25embedOptions.rickRoll == "n") {
            document.innerHTML = _25HoursaDay_on_github;
          } else {rick();}
        } else {var reason = "Content owner undefined, contact content owner."; document.innerHTML = _25HoursaDay_on_github;}
      } else {var reason = "Content owner undefined, contact content owner."; document.innerHTML = _25HoursaDay_on_github;}
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
`;}
