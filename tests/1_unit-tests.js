const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Basic values', function() {
        // whole number
        test('#whole number', function(){
            let result1 = {
                initNum: 4,
                initUnit: 'gal',
                returnNum: 15.14164,
                retUnit: 'L',
                string: '4 gallons converts to 15.14164 liters'
            }
            assert.deepEqual(result1, convertHandler.convert('4', 'gal'));

            let result2 = {
                initNum: 6,
                initUnit: 'mi',
                returnNum: 9.65604,
                retUnit: 'km',
                string: '6 miles converts to 9.65604 kilometers'
            }
            assert.deepEqual(result2, convertHandler.convert('6', 'mi'));
        });
        // decimal number
        test('#decimal number', function(){
            let result1 = {
                initNum: 3.1,
                initUnit: 'mi',
                returnNum: 4.98895,
                retUnit: 'km',
                string: '3.1 miles converts to 4.98895 kilometers'
            }
            assert.deepEqual(result1, convertHandler.convert('3.1', 'mi'));

            let result2 = {
                initNum: 6.43736,
                initUnit: 'km',
                returnNum: 4,
                retUnit: 'mi',
                string: '6.43736 kilometers converts to 4 miles'
            }
            assert.deepEqual(result2, convertHandler.convert('6.43736', 'km'));
        });
        // fractional input
        test('#fractional input', function(){
            let result1 = {
                initNum: 0.5,
                initUnit: 'km',
                returnNum: 0.31069,
                retUnit: 'mi',
                string: '0.5 kilometers converts to 0.31069 miles'
            }
            assert.deepEqual(result1, convertHandler.convert('0.5', 'km'));

            let result2 = {
                initNum: 0.2,
                initUnit: 'kg',
                returnNum: 0.44092,
                retUnit: 'lbs',
                string: '0.2 kilograms converts to 0.44092 pounds'
            }
            assert.deepEqual(result2, convertHandler.convert('0.2', 'kg'));
        });
        // fractional input with a decimal
        test('#fractional input with a decimal', function(){
            let result1 = {
                initNum: 1.7,
                initUnit: 'lbs',
                returnNum: 0.77111,
                retUnit: 'kg',
                string: '1.7 pounds converts to 0.77111 kilograms'
            }
            assert.deepEqual(result1, convertHandler.convert('1.7', 'lBs'));

            let result2 = {
                initNum: 0.01,
                initUnit: 'L',
                returnNum: 0.00264,
                retUnit: 'gal',
                string: '0.01 liters converts to 0.00264 gallons'
            }
            assert.deepEqual(result2, convertHandler.convert('0.01', 'l'));
        });
    });
    
    suite('Edge cases', function() {
        // default to numerical value of 1 when no numerical input is provided
        test('#default to numerical value of 1 if no input', function(){
            let result1 = {
                initNum: 1,
                initUnit: 'kg',
                returnNum: 2.20462,
                retUnit: 'lbs',
                string: '1 kilograms converts to 2.20462 pounds'
            }
            assert.deepEqual(result1, convertHandler.convert('', 'kg'));
            
            let result2 = {
                initNum: 1,
                initUnit: 'gal',
                returnNum: 3.78541,
                retUnit: 'L',
                string: '1 gallons converts to 3.78541 liters'
            }
            assert.deepEqual(result2, convertHandler.convert('', 'gal'));
        });
    });

    suite('Error handling', function() {
        // return an error for an invalid unit
        test('#return an error for an invalid unit', function() {
            assert.equal('invalid unit', convertHandler.convert('3', 'lbsT'));
            assert.equal('invalid unit', convertHandler.convert('2', 'Liter'));
            assert.equal('invalid unit', convertHandler.convert('1', 'KILO'));
            assert.equal('invalid unit', convertHandler.convert('0', 'hello'));
        });
        // return an error for an invalid unit and number
        test('#return an error for an invalid number and unit', function() {
            assert.equal('invalid number and unit', convertHandler.convert('3/', 'lbsT'));
            assert.equal('invalid number and unit', convertHandler.convert('2/.', 'Liter'));
            assert.equal('invalid number and unit', convertHandler.convert('1..', 'KILO'));
            assert.equal('invalid number and unit', convertHandler.convert('0/2/3', 'hello'));
        });
        // Return error on a double-fraction
        test('#Return error on a double-fraction or dot-tation', function(){
            assert.equal('invalid number', convertHandler.convert('3/2/3', 'lbs'));
            assert.equal('invalid number', convertHandler.convert('3/2//3', 'lbs'));
            assert.equal('invalid number', convertHandler.convert('3.5//', 'kg'));
            //assert.equal('invalid number', convertHandler.convert('3.5/', 'mi'));
            //assert.equal('invalid number', convertHandler.convert('3.5.', 'gal'));
        });
    }); 
});