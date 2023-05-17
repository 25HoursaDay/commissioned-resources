// n is disabled, y is enabled
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

/* DEFAULT SETTINGS: */
/*
allowSameHost:"y",
allowFileHost:"n",
allowDataHost:"y",
allowBlobHost:"y",
allowBlankHost:"n",
allowProxyHost:"y",
supportDevs:"y",
onlyAllowHTTP:"n",
onlyAllowHTTPS:"n",
rickRoll:"n",
ultraThreatProtection:"n" <-because it has the ability to break everything
*/

const _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"]; // domains allowed to embed content, defaulted to blank
const _25embedBlacklistDomains = []; // domains not allowed to embed content, defaulted to none



const rdadad = document.querySelector('html');
function changeTheme(var1, var2, var3, var4, var5) {
  localStorage.removeItem("themeinfo");
  rdadad.style.setProperty('--var1', var1);
  rdadad.style.setProperty('--var2', var2);
  rdadad.style.setProperty('--var3', var3);
  rdadad.style.setProperty('--var4', var4);
  rdadad.style.setProperty('--var5', var5);
}

  if (theme == "green") {
    changeTheme("black", "lime", "green", "lime", "lime");
  }
  if (theme == "blue") {
    changeTheme("black", "#1a1aff", "darkblue", "blue", "blue");
  }
