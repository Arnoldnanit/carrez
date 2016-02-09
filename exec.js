
var express = require('express');
var fs = require ('fs');
var app = express();
var Leboncoin = require('./Leboncoin.json');
var Meilleuragent = require('./magentjson.json');
var magentmodule = require('./modulemagent.js');
var leboncoinmodule = require('./firstprog.js');



// Entrez l'URL souhaité ici !
for(var i = 0 ; i<2; i++){
leboncoinmodule.lbcmodule("http://www.leboncoin.fr/ventes_immobilieres/922245242.htm?ca=12_s");
}
magentmodule.meilleuragentmodule();
// si le prix du bon coin est supérieur au prix du marché
if(Leboncoin.properties.Priceperm2lbc > Meilleuragent.properties.Priceperm2)
{

var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('Webpage'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/comparateurbad.html'));
  //__dirname : It will resolve the project folder.
});

app.listen(1234);

console.log("Server launched at port : 1234");
}

// et inversement
if(Leboncoin.properties.Priceperm2lbc <= Meilleuragent.properties.Priceperm2)
{	
var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static('Webpage'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/comparateurgood.html'));
  //__dirname : It will resolve the project folder.
});

app.listen(1234);

console.log("Server launched at port : 1234");
}



