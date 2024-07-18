'use strict';

const expect = require('chai').expect;
const { Router } = require('express');
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  app.route('/api/convert').get((req, res) => {
    const convertHandler = new ConvertHandler();
    const input = req.query.input;

    let initNum;
    let initUnit;
    let error = '';
    
    try {
      initNum = convertHandler.getNum(input);
    } catch(e) {
      error = e;
    }

    try {
      initUnit = convertHandler.getUnit(input);
    } catch(e) {
      if (!error.length) {
        error = e;
      } else {
        error += ' and unit';
      }
    }
 
    if (!error.length) {
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      let result = ({
        'initNum': initNum, 
        'initUnit': initUnit, 
        'returnNum': returnNum, 
        'returnUnit': returnUnit, 
        'string': string});
      res.json(result);
    } else {
      res.json(error);
    }
  });
};
