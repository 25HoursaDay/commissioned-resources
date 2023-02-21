if (_25embedOptions) {
  if (_25embedOptions.rickRoll == "n" || _25embedOptions.rickRoll == "y") {} else {_25embedOptions.rickRoll = "n";}
  if (_25embedOptions.allowSameHost == "n" || _25embedOptions.allowSameHost == "y") {} else {_25embedOptions.allowSameHost = "y";}
  if (_25embedOptions.allowFileHost == "n" || _25embedOptions.allowFileHost == "y") {} else {_25embedOptions.allowFileHost = "n";}
  if (_25embedOptions.allowDataHost == "n" || _25embedOptions.allowDataHost == "y") {} else {_25embedOptions.allowDataHost = "y";}
  if (_25embedOptions.allowBlobHost == "n" || _25embedOptions.allowBlobHost == "y") {} else {_25embedOptions.allowBlobHost = "y";}
  if (_25embedOptions.supportDevs == "n" || _25embedOptions.supportDevs == "y") {} else {_25embedOptions.supportDevs = "y";}
} else {
const _25embedOptions = {rickRoll:"n",allowSameHost:"y",allowFileHost:"n",allowDataHost:"y",allowBlobHost:"y",supportDevs:"y"};
  }
if (_25embedWhitelistDomains) {
  _25embedWhitelistDomains.push("25HoursaDay.github.io");
  _25embedWhitelistDomains.push("home-schoology.github.io");
} else {const _25embedWhitelistDomains = ["25HoursaDay.github.io","home-schoology.github.io"];}
if (_25embedBlacklistDomains) {} else {
const _25embedBlacklistDomains = [];}

var reason = "Prevented";
var ogContent = self.location;
var contentOwner = "u";
function _25HoursaDay_on_github (rsn) {document.write(`
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <link href="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '` + rsn + `'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  <script>var ogContent = self.location; function ogSrc() {window.open(ogContent);} function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}</`+`script>
  </div>
`);}
if (_25embedOptions.allowFileHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("file:") && contentOwner == "u") {
    var contentOwner = "n"; reason = "Content was loaded with a file URL."; _25embedLaunch();
  }
}
if (_25embedOptions.allowDataHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("data:") && contentOwner == "u") {
    var contentOwner = "n"; reason = "Content was loaded with a data URL."; _25embedLaunch();
  }
}
if (_25embedOptions.allowBlobHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("blob:") && contentOwner == "u") {
    var contentOwner = "n"; reason = "Content was loaded with a blob URL."; _25embedLaunch();
  }
}

if (contentOwner == "u") {
  if (_25embedOptions.allowSameHost == "y") {
    if (window.self.location.hostname == window.top.location.hostname) {var contentOwner = "y";
    } else {var contentOwner = "n"; reason = "Original content not hosted on this webpage."; _25embedLaunch();}
  }
}
if (contentOwner == "u") {
  if (window.self != window.top) {
    var contentOwner = "n"; reason = "The embedded content does not belong to this website."; _25embedLaunch();
  } else {var contentOwner = "y";}
}

function _25embedLaunch() {
    if (contentOwner != "y") {
        if (contentOwner == "n") {
          if (_25embedOptions.rickRoll == "y") {rick();} 
          else {_25HoursaDay_on_github(reason);}
        } else {reason = "Content owner is undefined, contact content owner."; _25HoursaDay_on_github(reason);}
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
`);}
