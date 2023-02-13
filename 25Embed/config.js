const _25embed = {
  settings: {
    
    rickRoll:"n", // default set to n
    
    allow: {
      SameHost:"n", // default set to y
      FileHost:"n", // default set to n
      DataHost:"y", // default set to y
      BlobHost:"y", // default set to y
    },
  },
    domains: {
      whitelist: ["25HoursaDay.github.io","home-schoology.github.io"],
      blacklist: []
    },
    urls: {
      whitelist: {},
      blacklist: {}
    }
};


// n is disabled, y is enabled
const _25embedOptions = {
rickRoll:"n", // default set to n
allowSameHost:"n", // default set to y
allowFileHost:"n", // default set to n
allowDataHost:"y", // default set to y
allowBlobHost:"y" // default set to y
};


const _25embedWhitelistDomains = ["25HoursaDay.github.io","home-schoology.github.io"]; // domains allowed to embed content, defaulted to blank
const _25embedBlacklistDomains = []; // domains not allowed to embed content, defaulted to none
