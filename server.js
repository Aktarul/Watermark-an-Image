
watermark = require('image-watermark');

var options = {
    'text': 'sample watermark',
    // 'change-format' : true,
    // 'output-format' : 'bmp',
    'color' : 'rgb(154, 50, 46)'
};
watermark.embedWatermark('SpiderMan.jpg',options);

