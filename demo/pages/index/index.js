//index.js
var wxbarcode = require('../../utils/index.js');

Page({

  data: {
    code: '1234567890123456789'
  },

  next: function (e) {
    wx.navigateTo({
      url: '../review/review',
    })
  },

  onLoad: function () {
    wxbarcode.barcode('barcode', '1234567890123456789', 680, 200);
    wxbarcode.qrcode('qrcode', '1234567890123456789', 420, 420);
  }
})
