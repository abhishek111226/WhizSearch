var port=3000;
var http = require('http'),
    path = require('path'),
    os = require('os');
var http = require('http'),
    path = require('path'),
    os = require('os');
var Busboy = require('busboy');
fs = require('fs');
var express = require('express');
var app = express();
exports.Writer = require('./lib/writer');
var bodyParser = require('body-parser');
var client='';
var cnt=1; 
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname);
app.set('view engine', 'jade');
app.post('/getblob', function(req,res){
var see=1;
	console.log('ajax blob request !!');
if (req.method === 'POST') {
	console.log('POST !!');
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) 
    {
	console.log('check details');
	
	console.log('filename is ='+filename);
	console.log('filetype is ='+mimetype);
	console.log('fieldname is ='+fieldname);
      var saveTo = __dirname+'\\'+filename;
	saveTo+=".wav";
	console.log('File saved on path---> : '+saveTo);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
    	console.log('done !!!')
      res.writeHead(200, { 'Connection': 'close' });
      res.end("Wowwww !!! file uploaded successfully !");
    });
    return req.pipe(busboy);
  }
	res.send('ACK');		
           
   });    

app.get('/', function(req, res){
  res.render('index');
});

console.log('Server listening on port No - '+port);
app.listen(port);