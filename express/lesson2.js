var QRCode = require('qrcode')

QRCode.toString('Amit Parmar',{type:'terminal'}, function (err, url) {
  console.log(url)
  
})