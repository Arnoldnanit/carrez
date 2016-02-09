

function meilleuragentmodule(){
var leboncoinmodule = require('./firstprog.js');
var fs = require('fs');	
var Leboncoin = require('./leboncoin.json');
var magentjson = require('./magentjson.json');

//var jsonLBC = require('./outputLBC.json');
var cheerio = require('cheerio');
// Si paris on choisit le fichié de paris.
if(74999<Leboncoin.properties.CodePostal<75021)
{
var file = fs.readFileSync('./Parismag.html', 'utf8');
}

// Si Marseille
if(12999<Leboncoin.properties.CodePostal<13017)
{
var file = fs.readFileSync('./Marseillemag.html', 'utf8');
}

//Si Lyon
if(68999<Leboncoin.properties.CodePostal<69010)
{
var file = fs.readFileSync('./Marseillemag.html', 'utf8');
}

var $ = cheerio.load(file);

var pr = $('.small-4.medium-2.columns.prices-summary__cell--median');

//get each data
var Prixappart = pr[0].children[0].data;


//Keep only numbers
Prixappart = Prixappart.match(/[0-9,]/g).join("").replace(",", ".");

//console.log(average_flat_price);


//insering in Json file
magentjson.properties.Priceperm2 = Prixappart;

fs.writeFile('BestAgent.json', JSON.stringify(magentjson, null, 4), function(err)
		{
			console.log('BestAgent.json crée');
		});
}	
		
		

		exports.meilleuragentmodule=meilleuragentmodule;
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//json.properties.average_house_price = average_house_price;
//json.properties.average_rent_price = average_rent_price;

/*
//Compare LebonCoin & MeilleursAgents
var priceMeter = jsonLBC.properties.price/jsonLBC.properties.Area;
var type = jsonLBC.properties.property_type;
var priceMA;

switch(type)
{
	case "Appartement":
		priceMA = json.properties.average_flat_price;
	break;
	
	case "Maison":
		priceMA = json.properties.average_house_price;
	break;
	
	//location pas fait -> soulève un pb : les locations sont quand meme des appartements ou maison dans type 	
}


console.log("price/m LeBonCoin : " + priceMeter);
console.log("price/m MeilleursAgents : " + priceMA);

if(priceMeter > priceMA)
{
	json.properties.good_deal = false;
	console.log("BAD DEAL ! ");
	
}
else
{
	json.properties.good_deal = true;
	console.log("GOOD DEAL ! ");
	console.log(json.properties.good_deal);
}

fs.writeFile('outputMA.json', JSON.stringify(json, null, 4), function(err)
	{
			console.log('Writing went good ! Check outputMA.json in your folder');
	});*/