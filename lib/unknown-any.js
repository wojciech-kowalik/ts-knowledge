"use strict";
let unknownVariable;
let anyVariable;
//unknownVariable.test() // error
let booleanValue = true;
unknownVariable = booleanValue;
//booleanValue = unknownVariable // error
booleanValue = anyVariable;
anyVariable.test();
