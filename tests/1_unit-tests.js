const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('#whole number', function(){
        console.log("convertHandler: ", convertHandler.convert(3.1, 'mi'));
    });
});