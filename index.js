var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://web.bankin.com/challenge/index.html')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
    .getText('//html/body/table/tbody/tr[1]/th[1]').then(function(text) {
      console.log('text is: ' + text);
    })
    .end(console.log('titi'));
