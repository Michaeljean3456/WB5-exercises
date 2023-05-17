"use strict";
let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
    ];

    function lessThan4(candy){
        if (candy.price < 4){
            return true;
        }
        else{
            return false;
        }
    }
    let candieslessthan4 = products.filter(lessThan4);
    for(let candies of candieslessthan4){
        console.log(candies.price)
    }
    console.log("-------------");

    function nameMnM(name){

        return name.product.includes("M&Ms");
    }

let containsMnm = products.filter(nameMnM);
for (let chocolate of containsMnm){
    console.log(chocolate.product);
}
console.log("-------------");





