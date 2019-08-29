var barcode = require('./barcode');
var qrcode = require('./qrcode');

function convert_length(length) {
  return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}

function barc(id, code, width, height, own) {
  barcode.code128(wx.createCanvasContext(id, own), code, convert_length(width), convert_length(height))
}

function qrc(id, code, width, height, own) {
  qrcode.api.draw(code, {
    ctx: wx.createCanvasContext(id, own),
    width: convert_length(width),
    height: convert_length(height)
  })
}

module.exports = {
  barcode: barc,
  qrcode: qrc
}