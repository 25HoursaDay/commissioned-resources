if (!_25embed) {
const _25embed = {
  settings: {
    
    rickRoll:"n", // default set to n
    
    perms: {
      SameHost:"n", // default set to y
      FileHost:"n", // default set to n
      DataHost:"y", // default set to y
      BlobHost:"y", // default set to y
    },
  },
    domains: {
      whitelist: ["25HoursaDay.github.io","home-schoology.github.io"],
      blacklist: []
    },
    urls: {
      whitelist: [],
      blacklist: []
    }
};
} else {
if (_25embed.settings) {
if (!_25embed.settings.perms) {_25embed.settings.push("perms");}
  if (!_25embed.settings.rickRoll) {_25embed.settings.push("rickRoll");}
    if (_25embed.settings.rickRoll == "n" || _25embed.settings.rickRoll == "y") {} else {_25embed.settings.rickRoll = "n";}
  if (!_25embed.settings.perms.SameHost) {_25embed.settings.perms.push("SameHost");}
    if (_25embed.settings.perms.SameHost == "n" || _25embed.settings.perms.SameHost == "y") {} else {_25embed.settings.perms.SameHost = "y";}
  if (!_25embed.settings.perms.FileHost) {_25embed.settings.perms.push("FileHost");}
    if (_25embed.settings.perms.FileHost == "n" || _25embed.settings.perms.FileHost == "y") {} else {_25embed.settings.perms.FileHost = "n";}
  if (!_25embed.settings.perms.DataHost) {_25embed.settings.perms.push("DataHost");}
    if (_25embed.settings.perms.DataHost == "n" || _25embed.settings.perms.DataHost == "y") {} else {_25embed.settings.perms.DataHost = "y";}
  if (!_25embed.settings.perms.BlobHost) {_25embed.settings.perms.push("BlobHost");}
    if (_25embed.settings.perms.BlobHost == "n" || _25embed.settings.perms.BlobHost == "y") {} else {_25embed.settings.perms.BlobHost = "y";}
  } 
  else {_25embed.push("settings"); 
    _25embed.settings = {    
    rickRoll:"n", // default set to n
    
    perms: {
      SameHost:"n", // default set to y
      FileHost:"n", // default set to n
      DataHost:"y", // default set to y
      BlobHost:"y", // default set to y
    },
  }
 }
if (!_25embed.domains) {
  _25embed.push("domains"); 
  _25embed.domains.push("whitelist"); 
  _25embed.domains.push("blacklist"); 
  _25embed.domains.whitelist = ["25HoursaDay.github.io","home-schoology.github.io"]; 
  _25embed.domains.blacklist = [];
} else {
  if (!_25embed.domains.whitelist){
    _25embed.domains.push("whitelist");
    _25embed.domains.whitelist = ["25HoursaDay.github.io","home-schoology.github.io"];
  } else {
    _25embed.domains.whitelist.push("25HoursaDay.github.io"); 
    _25embed.domains.whitelist.push("home-schoology.github.io");}

   if (!_25embed.domains.blacklist){
    _25embed.domains.push("blacklist");
    _25embed.domains.blacklist = [];
  }
}
if (!_25embed.urls) {_25embed.push("urls"); _25embed.urls.push("whitelist"); _25embed.urls.push("blacklist");}
}

var reason = "Prevented";
var ogContent = self.location;
var contentOwner = "u";
var _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '` + reason + `'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  </div>
`;
if (_25embed.settings.perms.FileHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("file:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a file URL."; _25embedLaunch();
  }
}
if (_25embed.settings.perms.DataHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("data:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a data URL."; _25embedLaunch();
  }
}
if (_25embed.settings.perms.BlobHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("blob:") && contentOwner == "u") {
    var contentOwner = "n"; var reason = "Content was loaded with a blob URL."; _25embedLaunch();
  }
}

if (contentOwner == "u") {
  if (_25embed.settings.perms.SameHost == "y") {
    if (window.self.location.hostname == window.top.location.hostname) {var contentOwner = "y";
    } else {var contentOwner = "n"; var reason = "Original content not hosted on this webpage."; _25embedLaunch();}
  }
}
if (contentOwner == "u") {
  if (window.self != window.top) {
    var contentOwner = "n"; var reason = "The embedded content does not belong to this website."; _25embedLaunch();
  } else {var contentOwner = "y";}
}

function _25embedLaunch() {
    if (contentOwner != "y") {
        if (contentOwner == "n") {
          if (_25embed.settings.perms.rickRoll == "y") {rick();} 
          else {document.innerHTML = _25HoursaDay_on_github;}
        } else {var reason = "Content owner is undefined, contact content owner."; document.innerHTML = _25HoursaDay_on_github;}
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
