const sarcina = require('../lib/index.js');
const path = require('path');

sarcina.bundle({
    src: 'src',
    minifyHtml: false,
    verbose: true,
    minifyScript: true,
    transpileScript: true,
    ignore: ['admin.html'],
}).then((result) => {
    console.log(result);
});