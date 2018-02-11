var euro = Number(prompt('enter amount of EURO', 0));
var usd = Number(prompt('enter amount of USD', 0));

var usdRate = 27.1240;
var euroRate = 33.2324;

var usdToUah = parseFloat((usdRate * usd).toFixed(2));
var euroToUah = parseFloat((euroRate * euro).toFixed(2));
var euroToUsd = parseFloat((euroRate / usdRate).toFixed(2));

if ((euro <=0) || (usd <=0)) {
    console.log('incorrect data')
} else {
    console.log(euro + ' euros are equal ' + euroToUah + ' UAH, ' + usd + ' dollars are equal ' + usdToUah + ', one euro is equal ' + euroToUsd + ' dollars');
}