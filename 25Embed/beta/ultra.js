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
console.log(document.currentScript.innerText.includes("_____WB$wombat$assign$function_____")); // true or false
console.log(document.currentScript.src.includes("web.archive.org")); // true or false
}
