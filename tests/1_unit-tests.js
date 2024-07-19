const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Basic values', function() {
        // whole number
        const result = {
            initNum: 4,
            initUnit: 'gal',
            returnNum: 15.14164,
            returnUnit: 'L',
            string: '4 gallons converts to 15.14164 liters'
        }
        test('#whole number 4gal getNum', function(){
            assert.strictEqual(result['initNum'], convertHandler.getNum('4gal'));
        });
        test('#whole number 4gal getUnit', function(){
            assert.strictEqual(result['initUnit'], convertHandler.getUnit('4gal'));
        });
        test('#whole number 4gal convert', function(){
            assert.strictEqual(result['returnNum'], convertHandler.convert(4, 'gal'));
        });
        test('#whole number 4gal getReturnUnit', function(){
            assert.strictEqual(result['returnUnit'], convertHandler.getReturnUnit('gal'));
        });
        test('#whole number 4gal getString', function(){
            assert.strictEqual(result['string'], convertHandler.getString(4, 'gal', result['returnNum'], result['returnUnit']));
        });
        const result1 = {
            initNum: 6,
            initUnit: 'mi',
            returnNum: 9.65604,
            returnUnit: 'km',
            string: '6 miles converts to 9.65604 kilometers'
        }
        test('#whole number 6mi getNum', function() {
            assert.strictEqual(result1['initNum'], convertHandler.getNum('6mi'));
        });
        test('#whole number 6mi getUnit', function() {
            assert.strictEqual(result1['initUnit'], convertHandler.getUnit('6mi'));
        });
        test('#whole number 6mi convert', function() {
            assert.strictEqual(result1['returnNum'], convertHandler.convert(6, 'mi'));
        });
        test('#whole number 6mi getReturnUnit', function() {
            assert.strictEqual(result1['returnUnit'], convertHandler.getReturnUnit('mi'));
        });
        test('#whole number 6mi getString', function() {
            assert.strictEqual(result1['string'], convertHandler.getString(6, 'mi', result1['returnNum'], result1['returnUnit']));
        });
        // decimal number
        const result2 = {
            initNum: 3.1,
            initUnit: 'mi',
            returnNum: 4.98895,
            returnUnit: 'km',
            string: '3.1 miles converts to 4.98895 kilometers'
        }
        test('#decimal number 3.1mi getNum', function(){
            assert.strictEqual(result2['initNum'], convertHandler.getNum('3.1mi'));
        });
        test('#decimal number 3.1mi getUnit', function(){
            assert.strictEqual(result2['initUnit'], convertHandler.getUnit('3.1mi'));
        });
        test('#decimal number 3.1mi convert', function(){
            assert.strictEqual(result2['returnNum'], convertHandler.convert(3.1, 'mi'));
        });
        test('#decimal number 3.1mi getReturnUnit', function(){
            assert.strictEqual(result2['returnUnit'], convertHandler.getReturnUnit('mi'));
        });
        test('#decimal number 3.1mi getString', function(){
            assert.strictEqual(result2['string'], convertHandler.getString(3.1, 'mi', result2['returnNum'], result2['returnUnit']));
        });
        const result3 = {
            initNum: 6.43736,
            initUnit: 'km',
            returnNum: 4,
            returnUnit: 'mi',
            string: '6.43736 kilometers converts to 4 miles'
        }
        test('#decimal number 6.43736km getNum', function() {
            assert.strictEqual(result3['initNum'], convertHandler.getNum('6.43736km'));
        });
        test('#decimal number 6.43736km getUnit', function() {
            assert.strictEqual(result3['initUnit'], convertHandler.getUnit('6.43736km'));
        });
        test('#decimal number 6.43736km convert', function() {
            assert.strictEqual(result3['returnNum'], convertHandler.convert(6.43736, 'km'));
        });
        test('#decimal number 6.43736km getReturnUnit', function() {
            assert.strictEqual(result3['returnUnit'], convertHandler.getReturnUnit('km'));
        });
        test('#decimal number 6.43736km getString', function() {
            assert.strictEqual(result3['string'], convertHandler.getString(6.43736, 'km', result3['returnNum'], result3['returnUnit']));
        });
        // fractional input
        const result4 = {
            initNum: 0.5,
            initUnit: 'km',
            returnNum: 0.31069,
            returnUnit: 'mi',
            string: '0.5 kilometers converts to 0.31069 miles'
        }
        test('#fractional input 1/2km getNum', function(){
            assert.strictEqual(result4['initNum'], convertHandler.getNum('1/2km'));
        });
        test('#fractional input 1/2km getUnit', function(){
            assert.strictEqual(result4['initUnit'], convertHandler.getUnit('1/2km'));
        });
        test('#fractional input 1/2km convert', function(){
            assert.strictEqual(result4['returnNum'], convertHandler.convert(0.5, 'km'));
        });
        test('#fractional input 1/2km getReturnUnit', function(){
            assert.strictEqual(result4['returnUnit'], convertHandler.getReturnUnit('km'));
        });
        test('#fractional input 1/2km getString', function(){
            assert.strictEqual(result4['string'], convertHandler.getString(0.5, 'km', result4['returnNum'], result4['returnUnit']));
        });
        const result5 = {
            initNum: 0.2,
            initUnit: 'kg',
            returnNum: 0.44092,
            returnUnit: 'lbs',
            string: '0.2 kilograms converts to 0.44092 pounds'
        }
        test('#fractional input 1/5kg getNum', function() {
            assert.strictEqual(result5['initNum'], convertHandler.getNum('1/5kg'));
        });
        test('#fractional input 1/5kg getUnit', function() {
            assert.strictEqual(result5['initUnit'], convertHandler.getUnit('1/5kg'));
        });
        test('#fractional input 1/5kg convert', function() {
            assert.strictEqual(result5['returnNum'], convertHandler.convert(0.2, 'kg'));
        });
        test('#fractional input 1/5kg getReturnUnit', function() {
            assert.strictEqual(result5['returnUnit'], convertHandler.getReturnUnit('kg'));
        });
        test('#fractional input 1/5kg getString', function() {
            assert.strictEqual(result5['string'], convertHandler.getString(0.2, 'kg', result5['returnNum'], result5['returnUnit']));
        });
        // fractional input with a decimal
        const result6 = {
            initNum: 2.1,
            initUnit: 'lbs',
            returnNum: 0.95254,
            returnUnit: 'kg',
            string: '2.1 pounds converts to 0.95254 kilograms'
        };
        test('#fractional input with a decimal 10.5/5lbs getNum', function(){
            assert.strictEqual(result6['initNum'], convertHandler.getNum('10.5/5lbs'));
        });
        test('#fractional input with a decimal 10.5/5lbs getUnit', function(){
            assert.strictEqual(result6['initUnit'], convertHandler.getUnit('10.5/5lbs'));
        });
        test('#fractional input with a decimal 10.5/5lbs convert', function(){
            assert.strictEqual(result6['returnNum'], convertHandler.convert(2.1, 'lbs'));
        });
        test('#fractional input with a decimal 10.5/5lbs getReturnUnit', function(){
            assert.strictEqual(result6['returnUnit'], convertHandler.getReturnUnit('lbs'));
        });
        test('#fractional input with a decimal 10.5/5lbs getString', function(){
            assert.strictEqual(result6['string'], convertHandler.getString(2.1, 'lbs', result6['returnNum'], result6['returnUnit']));
        });
        const result7 = {
            initNum: 0.25,
            initUnit: 'L',
            returnNum: 0.06604,
            returnUnit: 'gal',
            string: '0.25 liters converts to 0.06604 gallons'
        };
        test('#fractional input with a decimal 0.5/2L getNum', function() {
            assert.strictEqual(result7['initNum'], convertHandler.getNum('0.5/2L'));
        });
        test('#fractional input with a decimal 0.5/2L getUnit', function() {
            assert.strictEqual(result7['initUnit'], convertHandler.getUnit('0.5/2L'));
        });
        test('#fractional input with a decimal 0.5/2L convert', function() {
            assert.strictEqual(result7['returnNum'], convertHandler.convert(0.25, 'L'));
        });
        test('#fractional input with a decimal 0.5/2L getReturnUnit', function() {
            assert.strictEqual(result7['returnUnit'], convertHandler.getReturnUnit('L'));
        });
        test('#fractional input with a decimal 0.5/2L getString', function() {
            assert.strictEqual(result7['string'], convertHandler.getString(0.25, 'L', result7['returnNum'], result7['returnUnit']));
        });
    });
    
    suite('Edge cases', function() {
        // default to numerical value of 1 when no numerical input is provided
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