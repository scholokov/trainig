// index.js
// import '../sass/main.scss';


//require('bootstrap');
function Product(name, price, picture) {
    this.name = name;
    this.price = price;
    this.picture = picture;
}

var myEagle = new Product("Eagle", 999, "Eagle.png");
var myNissan = new Product("Nissan", 888, "Nissan");
var myMazda = new Product("Mazda", 777, "Mazda");

myNissan.name = `
dd
ddf dddd ddddd de
bugge d
`;


console.log( myNissan.name);


import $ from 'jquery';

// export for others scripts to use
window.$ = window.jQuery = $;

$(document).ready(function(){
   console.log("Hello jQuery!");
});
