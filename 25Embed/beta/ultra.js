// prevent webcache, archive.org, proxies, ect.

if (_25embedOptions.ultraThreatProtection == "y") {
  if (window.top.location.hostname == "webcache.googleusercontent.com/" || window.location.hostname == "webcache.googleusercontent.com/") {

    window.close();
    _25embedLaunch("n", 'Protocol "ultraThreatProtection"');
  }
}
