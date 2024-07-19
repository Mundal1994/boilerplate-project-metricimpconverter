const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Basic values', function() {
        // whole number
        //#1
        test('#whole number 4gal', function(){
            let result1 = {
                initNum: 4,
                initUnit: 'gal',
                returnNum: 15.14164,
                returnUnit: 'L',
                string: '4 gallons converts to 15.14164 liters'
            }
            assert.strictEqual(result1['initNum'], convertHandler.getNum('4gal'));
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('4gal'));
            assert.strictEqual(result1['returnNum'], convertHandler.convert(4, 'gal'));
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('gal'));
            assert.strictEqual(result1['string'], convertHandler.getString(4, 'gal', result1['returnNum'], result1['returnUnit']));
        });
        //#2
        test('#whole number 6mi', function() {
            let result2 = {
                initNum: 6,
                initUnit: 'mi',
                returnNum: 9.65604,
                returnUnit: 'km',
                string: '6 miles converts to 9.65604 kilometers'
            }
            assert.strictEqual(result2['initNum'], convertHandler.getNum('6mi'));
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('6mi'));
            assert.strictEqual(result2['returnNum'], convertHandler.convert(6, 'mi'));
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('mi'));
            assert.strictEqual(result2['string'], convertHandler.getString(6, 'mi', result2['returnNum'], result2['returnUnit']));
        });
        // decimal number
        //#3
        test('#decimal number 3.1mi', function(){
            let result1 = {
                initNum: 3.1,
                initUnit: 'mi',
                returnNum: 4.98895,
                returnUnit: 'km',
                string: '3.1 miles converts to 4.98895 kilometers'
            }
            assert.strictEqual(result1['initNum'], convertHandler.getNum('3.1mi'));
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('3.1mi'));
            assert.strictEqual(result1['returnNum'], convertHandler.convert(3.1, 'mi'));
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('mi'));
            assert.strictEqual(result1['string'], convertHandler.getString(3.1, 'mi', result1['returnNum'], result1['returnUnit']));
        });
        //#4
        test('#decimal number 6.43736km', function() {
            let result2 = {
                initNum: 6.43736,
                initUnit: 'km',
                returnNum: 4,
                returnUnit: 'mi',
                string: '6.43736 kilometers converts to 4 miles'
            }
            assert.strictEqual(result2['initNum'], convertHandler.getNum('6.43736km'));
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('6.43736km'));
            assert.strictEqual(result2['returnNum'], convertHandler.convert(6.43736, 'km'));
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('km'));
            assert.strictEqual(result2['string'], convertHandler.getString(6.43736, 'km', result2['returnNum'], result2['returnUnit']));
        });
        // fractional input
        //#5
        test('#fractional input 1/2km', function(){
            let result1 = {
                initNum: 0.5,
                initUnit: 'km',
                returnNum: 0.31069,
                returnUnit: 'mi',
                string: '0.5 kilometers converts to 0.31069 miles'
            }
            assert.strictEqual(result1['initNum'], convertHandler.getNum('1/2km'));
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('1/2km'));
            assert.strictEqual(result1['returnNum'], convertHandler.convert(0.5, 'km'));
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('km'));
            assert.strictEqual(result1['string'], convertHandler.getString(0.5, 'km', result1['returnNum'], result1['returnUnit']));
        });
        //#6
        test('#fractional input 1/5kg', function() {
            let result2 = {
                initNum: 0.2,
                initUnit: 'kg',
                returnNum: 0.44092,
                returnUnit: 'lbs',
                string: '0.2 kilograms converts to 0.44092 pounds'
            }
            assert.strictEqual(result2['initNum'], convertHandler.getNum('1/5kg'));
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('1/5kg'));
            assert.strictEqual(result2['returnNum'], convertHandler.convert(0.2, 'kg'));
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('kg'));
            assert.strictEqual(result2['string'], convertHandler.getString(0.2, 'kg', result2['returnNum'], result2['returnUnit']));
        });
        // fractional input with a decimal
        //#7
        test('#fractional input with a decimal 10.5/5lbs', function(){
            let result1 = {
                initNum: 2.1,
                initUnit: 'lbs',
                returnNum: 0.95254,
                returnUnit: 'kg',
                string: '2.1 pounds converts to 0.95254 kilograms'
            }
            assert.strictEqual(result1['initNum'], convertHandler.getNum('10.5/5lbs'));
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('10.5/5lbs'));
            assert.strictEqual(result1['returnNum'], convertHandler.convert(2.1, 'lbs'));
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('lbs'));
            assert.strictEqual(result1['string'], convertHandler.getString(2.1, 'lbs', result1['returnNum'], result1['returnUnit']));
        });
        //#8
        test('#fractional input with a decimal 0.5/2L', function() {
            let result2 = {
                initNum: 0.25,
                initUnit: 'L',
                returnNum: 0.06604,
                returnUnit: 'gal',
                string: '0.25 liters converts to 0.06604 gallons'
            }
            assert.strictEqual(result2['initNum'], convertHandler.getNum('0.5/2L'));
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('0.5/2L'));
            assert.strictEqual(result2['returnNum'], convertHandler.convert(0.25, 'L'));
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('L'));
            assert.strictEqual(result2['string'], convertHandler.getString(0.25, 'L', result2['returnNum'], result2['returnUnit']));
        });
    });
    
    suite('Edge cases', function() {
        // default to numerical value of 1 when no numerical input is provided
        //#9
        test('#default to numerical value of 1 if no input', function() {
            let result1 = {
                initNum: 1,
                initUnit: 'kg',
                returnNum: 2.20462,
                returnUnit: 'lbs',
                string: '1 kilograms converts to 2.20462 pounds'
            }
            assert.strictEqual(result1['initNum'], convertHandler.getNum('kg'));
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('kg'));
            assert.strictEqual(result1['returnNum'], convertHandler.convert(1, 'kg'));
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('kg'));
            assert.strictEqual(result1['string'], convertHandler.getString(1, 'kg', result1['returnNum'], result1['returnUnit']));
        });
        //#10
        test('#default to numerical value of 1 if no input test 2', function() {
            let result2 = {
                initNum: 1,
                initUnit: 'gal',
                returnNum: 3.78541,
                returnUnit: 'L',
                string: '1 gallons converts to 3.78541 liters'
            }
            assert.strictEqual(result2['initNum'], convertHandler.getNum('gal'));
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('gal'));
            assert.strictEqual(result2['returnNum'], convertHandler.convert(1, 'gal'));
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('gal'));
            assert.strictEqual(result2['string'], convertHandler.getString(1, 'gal', result2['returnNum'], result2['returnUnit']));
        });
    });
});