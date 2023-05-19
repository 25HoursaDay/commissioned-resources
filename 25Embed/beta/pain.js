const _25embedOptions = {
  allowSameHost: "y",
  allowFileHost: "n",
  allowDataHost: "y",
  allowBlobHost: "y",
  allowBlankHost: "n",
  allowProxyHost: "y",
  supportDevs: "y",
  onlyAllowHTTP: "n",
  onlyAllowHTTPS: "n",
  rickRoll: "n",
  ultraThreatProtection: "n"
};
const _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"]; // domains allowed to embed content, defaulted to blank
const _25embedBlacklistDomains = []; // domains not allowed to embed content, defaulted to none

var reason = "Prevented";
var contentOwner = "u";

function _25HoursaDay_on_github(rsn) {
  if (_25embedOptions.supportDevs != "n") {
    let supDev = `<script async src="https://arc.io/widget.min.js#mppA68Nm"></` + `script>`;
  } else {
    let supDev = "";
  }
  document.write(`
  <link href="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@a1cc93c205fe1821e358eb433ce9289cfba02a29/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '` + rsn + `'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  <script>
  var ogContent = self.location;
  function ogSrc() {window.open(ogContent);}
  function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}
  
  function changeTheme(tvar1, tvar2, tvar3, tvar4, tvar5) {
  const rdadad = document.querySelector('html');
  rdadad.style.setProperty('--var1', tvar1);
  rdadad.style.setProperty('--var2', tvar2);
  rdadad.style.setProperty('--var3', tvar3);
  rdadad.style.setProperty('--var4', tvar4);
  rdadad.style.setProperty('--var5', tvar5);
}

console.log(_25embedOptions.theme);
if (_25embedOptions.theme == "green") {
console.log("dgdgdrg");
changeTheme("black","lime","green","lime","lime");
}
  </` + `script>
  </div>
`);
}

const _25embedDefaults = {
  allowSameHost: "y",
  allowFileHost: "n",
  allowDataHost: "y",
  allowBlobHost: "y",
  allowBlankHost: "n",
  allowProxyHost: "y",
  supportDevs: "y",
  onlyAllowHTTP: "n",
  onlyAllowHTTPS: "n",
  rickRoll: "n",
  ultraThreatProtection: "n"
};
const themeList = ["blue", "green"];

if (typeof _25embedOptions == "undefined") {
  const _25embedOptions = _25embedDefaults;
}

var text = "";
var x;
for (x in _25embedDefaults) {
  // text += _25embedOptions[x];
  if (typeof _25embedOptions[x] !== "undefined") {
    if (_25embedOptions[x] !== "y" || _25embedOptions[x] !== "n") {
      _25embedOptions[x] = _25embedDefaults[x];
    }
  } else {
    _25embedOptions[x] = _25embedDefaults[x];
  }
  console.log(x);
  console.log(_25embedOptions[x]);
}

if (typeof theme !== "undefined") {
  if (!themeList.includes(theme)) {
    theme = "blue";
  }
} else {
  let theme = "blue";
}
if (typeof _25embedWhitelistDomains !== "undefined") {
  _25embedWhitelistDomains.push("25HoursaDay.github.io");
  _25embedWhitelistDomains.push("home-schoology.github.io");
} else {
  const _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"];
}

if (typeof _25embedBlacklistDomains !== "undefined") {

} else {
  const _25embedBlacklistDomains = [];
}

/*
if (_25embedOptions.allowFileHost == "n" && window.location.href.startsWith("file:")) {
  _25HoursaDay_on_github("Content was loaded with a file: URL.");
}
if (_25embedOptions.allowDataHost == "n" && window.location.href.startsWith("data:")) {
  _25HoursaDay_on_github("Content was loaded with a data: URL.");
}
if (_25embedOptions.allowBlobHost == "n" && window.location.href.startsWith("blob:")) {
  _25HoursaDay_on_github("Content was loaded with a blob: URL.");
}

if (_25embedOptions.allowSameHost == "y") {
  if (window.self.location.hostname !== window.top.location.hostname) {
    _25embedLaunch("n", "Original content not hosted on this webpage.");
  }
}
*/

/*
if (_25embedOptions.ultraThreatProtection == "y") {
  if (document.endsWith(`</` + `html>`)) {} else {
    document.innerHTML = `<html>` + document.innerHTML + `</` + `html>`
  }
  if (window.top.location.hostname == "http://webcache.googleusercontent.com/" || window.self.location.hostname == "http://webcache.googleusercontent.com/") {

    window.close();
    // if doesnt work, the function will launch
    _25embedLaunch("n", 'Protocol "ultraThreatProtection"');
  }
}

if (contentOwner == "u") {
  if (window.self != window.top) {

    _25embedLaunch("n", "The embedded content does not belong to this website.");
  } else {

    _25embedLaunch("y");
  }
}

function ogSrc() {
  window.open(ogContent);
}

function repo() {
  window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");
}
*/
