#!/usr/bin/env node
let parser = require('public/calculator.js');

let input =process.argv.slice(2).pop() || "2*3";
let r = parser.parse(input);
console.log(r);
