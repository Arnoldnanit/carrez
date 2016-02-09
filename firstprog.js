
 function lbcmodule(URL){

var fs = require('fs'); 
var http = require('http'),
    url = process.argv[2];
var jsonfile = require('./leboncoinjson.json')	
var prix;
var surface;
var cp;
var prixlbc;
var surfacelbc;					
var cplbc;
var regprix;
var regsurface;
var regcp;
 
http.get(URL, function (res) {
    res.on('data', function (data) {
	prix = data.indexOf("prix :")
	surface = data.indexOf("surface :")
	cp = data.indexOf("cp :")
	if( prix != -1){
	
	prixlbc =data.toString().substr(prix,15)
	surfacelbc= data.toString().substr(surface,15)
	cplbc= data.toString().substr(cp,15)
	
 regprix = /([0-9]+)/.exec(prixlbc);
 regsurface = /([0-9]+)/.exec(surfacelbc)
 regcp = /([0-9]+)/.exec(cplbc)

//console.log(regprix[0])
//console.log(regsurface[0])
//console.log(regcp[0])

jsonfile.properties.Price = regprix[0]; 
jsonfile.properties.Surface =regsurface[0] ;
jsonfile.properties.Codepostal =regcp[0];
jsonfile.properties.Priceperm2lbc= regprix[0] / regsurface[0];
fs.writeFile('Leboncoin.json', JSON.stringify(jsonfile, null, 4), function(err)
		{
			console.log('Leboncoin.json crée');
		});
	
	}

    });
	
});
}


exports.lbcmodule = lbcmodule;



