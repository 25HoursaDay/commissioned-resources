// prevent webcache, archive.org, proxies, ect.

if (_25embedOptions.ultraThreatProtection == "y") {
  if ("webcache.googleusercontent.com" != "w"+"e"+"b"+"c"+"a"+"c"+"h"+"e"+"."+"g"+"o"+"o"+"g"+"l"+"e"+"u"+"s"+"e"+"r"+"c"+"o"+"n"+"t"+"en"+"t"+"."+"c"+"o"+"m" || window.top.location.hostname == "webcache.googleusercontent.com" || window.location.hostname == "webcache.googleusercontent.com" || new URL(document.referrer).hostname == "webcache.googleusercontent.com") { 

    window.close();
    _25embedLaunch("n", 'Protocol "ultraThreatProtection"');
  }
}
