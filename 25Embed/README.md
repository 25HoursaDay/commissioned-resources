
## About 25Embed
25Embed is a tool to prevent your content from being embedded on sites that are not yours.
If you were directed to this page from an embed, please contact the original content owner to let them know their hard work is being stolen!

## Installation
To install 25Embed, first you must create your own [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file with settings to your liking (see [here]() for more information on config.js) or leave the settings default.
### HTML file (recommended)
To install 25Embed in an HTML file, you must add the [latest.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/latest.js) file and your custom [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) to a script tag in the head of your file (two script tags in total).
Example:
`
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
`
Put your [config.js](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/config.js) file url where it says "path to config file", and put the [25Embed](https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/latest.js) file url where it says "path to 25Embed file".
### Javascript file
If you would like to install 25Embed in your index.js file, you must add the following code:
`
document.head.append(`
  <script src="path to config file"></script>
  <script src="path to 25Embed file"></script>
`);
`
## History
I first thought of the concept of 25Embed back when I was not so technologically inclined, when I would just embed things into google sites.
I figured there had to be a way to prevent someone from so easily stealing your content, but I didn't know how to create something like that.
Fast forward two years, I have the ability to make something like that so I did.

## Similar tools
### Here are some noteworthy tools similar to 25Embed:
[Unframed](https://unframed.netlify.app/) a friend actually found and told me about this while I was working on 25Embed in class instead of doing work.
(I kinda stole the idea of the Unframed UI)
