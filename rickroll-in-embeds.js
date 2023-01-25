const credit_to_25HoursaDay_on_github = `
  <style></style>
  <h1>Embed protected.</h1> <br>
  <button onclick="ogSrc()"></button>
  <button onclick="repo()"></button>
`

if (window.self != window.top) {
  if (!document.referrer.includes(self.location)) {
    
    document.querySelector("html").innerHTML = credit_to_25HoursaDay_on_github;
    
  }
}

function ogSrc() {}
function repo() {}
function rick() {}

// 0 is disabled, 1 is enabled

const embedOptions = {
"rickRoll":"0",

};
