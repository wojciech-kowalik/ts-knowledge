let unknownVariable: unknown;
let anyVariable: any;

//unknownVariable.test() // error
let booleanValue: boolean = true;
unknownVariable = booleanValue;
//booleanValue = unknownVariable // error
booleanValue = anyVariable;
anyVariable.test();
