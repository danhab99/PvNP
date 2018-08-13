const cheerio = require('cheerio');
const request = require('request-promise');
const default_message = 'Service denied, P v. NP solved. Read more <a href="https://www.claymath.org/millennium-problems/p-vs-np-problem">here</a>';
const default_code = 500;

module.export = function(message, code) {
    return function(req, res, next) {
        request("https://www.claymath.org/millennium-problems/p-vs-np-problem").then(html => {
            var $ = cheerio.load(html);

            const results = $('#node-problem-112 > div.field-collection-container.clearfix > div > div > div > div > div > div > div.field-items > div').text();

            if (results === "Solved") {
                res.status(code || default_code).send(message || default_message);
            } else {
                next();
            }
        });
    }

}
