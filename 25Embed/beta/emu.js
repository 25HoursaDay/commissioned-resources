var emuData = document.createElement("script");
emuScript.innerHTML = `
var urlParams;
        (window.onpopstate = function () {
            var match,
                pl     = /\+/g,
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query  = window.location.search.substring(1);
            urlParams = {};
            while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        })();
        
        EJS_player = '#game';
        EJS_gameUrl = urlParams["rom"];
        EJS_core = 'gba';
        EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@main/data';
`;
var emuScript = document.creatElement("script");
emuScript.src = "https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@main/data/loader.js";
