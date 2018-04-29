#!/usr/bin/env node
let parser = require('public/calculator.js');

let r = parser.parse(process.argv.slice(2).pop() || "2*3");
console.log(r);
