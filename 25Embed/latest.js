var _25HoursaDay_on_github = `
  <link href="https://25hoursaday.github.io/commissioned-resources/25Embed/style.css" rel="stylesheet" type="text/css"/>
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: '`+reason+`'</h2>
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">More Information</button>
  <script>
    function ogSrc() {window.open(`+ogContent+`);}
    function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}
    </`+`script>
`;

var reason = "Prevented";
var ogContent = window.self.location;
var contentOwner = "unset";

// file protection
if (_25embedOptions.allowFileHost == "n" && contentOwner == "unset") {
  if (window.location.href.startsWith("file:") && contentOwner == "unset") {
    var contentOwner = "n"; var reason = "Content is hosted on a file URL.";
  }
}

// check if the source content is NOT the top element
if (window.self != window.top && contentOwner == "unset") {
  
// check if the referrer of the page is NOT the owner of the source content
  if (!document.referrer.includes(self.location) && contentOwner == "unset") {
    
// check if the source content owner is embedding the source content and if so, check if the "allowSameHost" setting is enabled. 
    if (window.self.location.hostname == window.top.location.hostname && contentOwner == "n") {
      if (_25embedOptions.allowSameHost == "y") {
        var contentOwner = "unset"; var reason = "Same host, different URL.";} else {var contentOwner = "y";
      }
      
    } else {var reason = "The embedded content does not belong to this website.";}
  } else {var contentOwner = "y";}
} else {var contentOwner = "y";}


  if (contentOwner != "y") {
    if (contentOwner == "n") {
      if (_25embedOptions.rickRoll == "y") {
        rick();
      } else {document.write(_25HoursaDay_on_github);}
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
`
);}

