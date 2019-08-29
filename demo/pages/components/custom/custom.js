var wxbarcode = require('../../../utils/index.js');

Component({

  data: {
    code: '1234567890123456789'
  },
  lifetimes: {
    attached: function() {
      wxbarcode.barcode('custom-barcode', '1234567890123456789', 680, 200, this);
    },
  },

  methods: {
    refresh: function() {
      wxbarcode.barcode('custom-barcode', '9876543210987654321', 680, 200, this);
    }
  }

})