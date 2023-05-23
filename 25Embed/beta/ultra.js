// prevent webcache, archive.org, proxies, ect.

if (_25embedOptions.ultraThreatProtection == "y") {
  if ("webcache.googleusercontent.com" !== "w"+"e"+"b"+"c"+"a"+"c"+"h"+"e"+"."+"g"+"o"+"o"+"g"+"l"+"e"+"u"+"s"+"e"+"r"+"c"+"o"+"n"+"t"+"en"+"t"+"."+"c"+"o"+"m" || window.top.location.hostname == "webcache.googleusercontent.com" || window.location.hostname == "webcache.googleusercontent.com" || new URL(document.referrer).hostname == "webcache.googleusercontent.com") {
    window.close();
    _25embedLaunch("n", 'Protocol ultraThreatProtection');
  }
  if ('window.location' !== 'wi'+'nd'+'ow'+'.'+'locat'+'ion' || 'document.referrer' !== 'do'+'cu'+'m'+'ent'+'.'+'r'+'efer'+'rer' || "window.top" !== 'wi'+'ndow'+'.'+'to'+'p') {
  window.close();
  _25embedLaunch("n", 'Protocol ultraThreatProtection');
  }
}


if (typeof document.currentScript !== "undefined") {
console.log(document.currentScript.innerText.includes("_____WB$wo"+"mbat$a"+"ssign$function_____")); // true or false
console.log(document.currentScript.src.includes("we"+"b.ar"+"chive"+".org")); // true or false
console.log(document.currentScript.innerText.includes("FI"+"LE AR"+"CHIVE"+"D O"+"N")); // true or false
console.log(document.currentScript.innerText.includes("BY"+" WAYB"+"ACK M"+"ACH"+"INE")); // true or false
console.log(document.currentScript.innerText.includes("CO"+"PYRIG"+"HT IN"+"TER"+"NET ARCHIVE")); // true or false
}
