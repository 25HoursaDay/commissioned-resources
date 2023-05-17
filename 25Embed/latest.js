if (_25embedOptions) {
  if (_25embedOptions.rickRoll == "n" || _25embedOptions.rickRoll == "y") {
    console.log("true");
  } else {
    _25embedOptions.rickRoll = "n";
  }
  if (_25embedOptions.allowSameHost == "n" || _25embedOptions.allowSameHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowSameHost = "y";
  }
  if (_25embedOptions.allowFileHost == "n" || _25embedOptions.allowFileHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowFileHost = "n";
  }
  if (_25embedOptions.allowDataHost == "n" || _25embedOptions.allowDataHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowDataHost = "y";
  }
  if (_25embedOptions.allowBlobHost == "n" || _25embedOptions.allowBlobHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowBlobHost = "y";
  }
  if (_25embedOptions.supportDevs == "n" || _25embedOptions.supportDevs == "y") {
    console.log("true");
  } else {
    _25embedOptions.supportDevs = "y";
  }
  if (_25embedOptions.ultraThreatProtection == "n" || _25embedOptions.ultraThreatProtection == "y") {
    console.log("true");
  } else {
    _25embedOptions.ultraThreatProtection = "n";
  }
  if (_25embedOptions.allowBlankHost == "n" || _25embedOptions.allowBlankHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowBlankHost = "n";
  }
  if (_25embedOptions.allowProxyHost == "n" || _25embedOptions.allowProxyHost == "y") {
    console.log("true");
  } else {
    _25embedOptions.allowProxyHost = "y";
  }
  if (_25embedOptions.onlyAllowHTTP == "n" || _25embedOptions.onlyAllowHTTP == "y") {
    console.log("true");
  } else {
    _25embedOptions.onlyAllowHTTP = "n";
  }
  if (_25embedOptions.onlyAllowHTTPS == "n" || _25embedOptions.onlyAllowHTTPS == "y") {
    console.log("true");
  } else {
    _25embedOptions.onlyAllowHTTPS = "n";
  }
} else {
  const _25embedOptions = {
    rickRoll: "n",
    allowSameHost: "y",
    allowFileHost: "n",
    allowDataHost: "y",
    allowBlobHost: "y",
    allowBlankHost: "n",
    allowProxyHost: "y",
    supportDevs: "y",
    onlyAllowHTTP: "n",
    onlyAllowHTTPS: "n",
    ultraThreatProtection: "n"
  };
}
if (_25embedWhitelistDomains) {
  _25embedWhitelistDomains.push("25HoursaDay.github.io");
  _25embedWhitelistDomains.push("home-schoology.github.io");
} else {
  const _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"];
}
if (_25embedBlacklistDomains) {} else {
  const _25embedBlacklistDomains = [];
}

var reason = "Prevented";
let ogContent = self.location;
var contentOwner = "u";

function _25HoursaDay_on_github(rsn) {
  var supDev = "";
  if (_25embedOptions.supportDevs != "n") {
    var supDev = `<script async src="https://arc.io/widget.min.js#mppA68Nm"></` + `script>`;
  }
  window.write(supDev + `
  <link href="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@main/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '` + rsn + `'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  <script>var ogContent = self.location; function ogSrc() {window.open(ogContent);} function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}</` + `script>
  </div>
`);
}
if (_25embedOptions.allowFileHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("file:") && contentOwner == "u") {
    let contentOwner = "n";
    _25embedLaunch("n", "Content was loaded with a file URL.");
  }
}
if (_25embedOptions.allowDataHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("data:") && contentOwner == "u") {
    let contentOwner = "n";
    _25embedLaunch("n", "Content was loaded with a data URL.");
  }
}
if (_25embedOptions.allowBlobHost == "n" && contentOwner == "u") {
  if (window.location.href.startsWith("blob:") && contentOwner == "u") {
    let contentOwner = "n";
    _25embedLaunch("n", "Content was loaded with a blob URL.");
  }
}
if (contentOwner == "u") {
  if (_25embedOptions.allowSameHost == "y") {
    if (window.self.location.hostname != window.top.location.hostname) {
      let contentOwner = "n";
      _25embedLaunch("n", "Original content not hosted on this webpage.");
    }
  }
}
if (contentOwner == "u") {
  if (_25embedOptions.ultraThreatProtection == "y") {
    if (document.endsWith(`</` + `html>`)) {} else {
      document.innerHTML = `<html>` + document.innerHTML + `</` + `html>`
    }
    if (window.top.location.hostname == "http://webcache.googleusercontent.com/" || window.self.location.hostname == "http://webcache.googleusercontent.com/") {
      let contentOwner = "n";
      window.top.close();
      // if doesnt work, the function will launch
      _25embedLaunch("n", 'Protocol "ultraThreatProtection"');
    }
  }
}
if (contentOwner == "u") {
  if (window.self != window.top) {
    let contentOwner = "n";
    _25embedLaunch("n", "The embedded content does not belong to this website.");
  } else {
    let contentOwner = "y";
    _25embedLaunch("y");
  }
}

function _25embedLaunch(contentOwn, rsn) {
  if (contentOwn == "y") {

  } else {
    if (contentOwn == "n") {
      _25HoursaDay_on_github(rsn);
    } else {
      _25HoursaDay_on_github("Content owner is undefined, contact content owner.");
    }
  }
}

function ogSrc() {
  window.open(ogContent);
}

function repo() {
  window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");
}
