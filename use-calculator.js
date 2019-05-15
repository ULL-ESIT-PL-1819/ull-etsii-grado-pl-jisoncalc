#!/usr/bin/env node
let parser = require('public/calculator.js');

let input =process.argv.slice(2).pop() || "a = 2*3;";
console.log("input = '"+input+"'");
let r = parser.parse(input);
console.log(r);
