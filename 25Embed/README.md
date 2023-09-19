**<h1 align="center">25Embed</h1>**
<div align = center>
  
![GitHub Repo stars](https://img.shields.io/github/stars/25HoursaDay/commissioned-resources?style=social)

</div>
**<h2>If you were directed to this page from an embed, please contact the original content owner to let them know their hard work is being stolen!</h2>**
<p>25Embed is a tool to prevent your content from being stolen using embeds.</p>

<h1>Installation</h1>
<p>To install 25Embed, first you must create your own <a href="https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js">config.js</a> file using the <a href="">25Embed Config Tool</a> if you want custom settings.
</p>

<h3>HTML file (recommended)</h3>
<p>To install 25Embed in an HTML file, you must add the <a href="https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/latest.js">latest.js</a> file and your custom <a href="https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js">config.js</a> file (leave it out if you want default settings.) to two script tags in the head of your file (two script tags in total).</p>

<p>Example:</p>

```
<html>
  <head>
    <!-- Your head content -->
    <script src="path to config file"></script>
    <script src="path to 25Embed file"></script>
  </head>
  <body>
    <!-- Your body content -->
  </body>
</html>
```

Put your [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file url where it says "path to config file", and put the [25Embed](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/latest.js) file url where it says "path to 25Embed file".

<h3>Javascript file</h3>

If you would like to install 25Embed in your index.js file, you must add the following code:
```
document.head.append(`
  <script src="path to config file"></script>
  <script src="path to 25Embed file"></script>
`);
```
Put your [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file url where it says "path to config file", and put the [25Embed](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/latest.js) file url where it says "path to 25Embed file".

<h3>Settings</h3>
The [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file is the file where your 25Embed settings are held.
If you would like to change your config file to enable/disable the default settings, you must create your own [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file with the settings adjusted to your liking.
To see a list of all settings and their functions, [click here!]()

<h1>History</h1>
<p>I first thought of the concept of 25Embed back when I was not so technologically inclined, when I would just embed things into google sites;</p>
<p>I figured there had to be a way to prevent someone from so easily stealing your content, but I didn't know how to create something like that at the time.</p>
<p>Fast forward two years, and I have the ability to make something like that... so I did.</p>

<h1>Similar tools</h1>
<h3>Here are some noteworthy tools similar to 25Embed:</h3>
<p><a href="https://unframed.netlify.app/">Unframed</a>: A friend actually found and told me about this while I was working on 25Embed in class instead of doing work. (I kinda stole the idea of Unframed's UI).</p>

<h1>More protection</h1>
If you want your content to be even more safe, be sure to add html tags to the begining and end of your html file.
