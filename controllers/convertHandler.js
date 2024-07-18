function ConvertHandler() {
  
  this.getNum = function(input) {
    if (!input.length) {
      return 1;
    }

    let i = 0;
    while (i < input.length) {
      if ((input[i] == '.' && input[i + 1] == '/') || (input[i] == '/' && input[i + 1] == '.')) {
        return 'invalid number';
      }
      ++i;
    }

    // check if what we found is valid
    const dotCount = (input.match(/\./g) || []).length;

    const regexSlash = new RegExp('/', 'g');
    const slashCount = (input.match(regexSlash) || []).length;
    if (dotCount > 1 || slashCount > 1 || input[input.length - 1] == '/')
      return 'invalid number';

    let result = parseFloat(input);
    if (typeof result == 'string' || result instanceof String)
      return 'invalid number';

    return result;
  };
  
  this.getUnit = function(input) {
    switch (input.toLowerCase()) {
      case 'mi':
        return 'mi';
      case 'km':
        return 'km';
      case 'gal':
        return 'gal';
      case 'l':
        return 'L';
      case 'lbs':
        return 'lbs';
      case 'kg':
        return 'kg';
      default:
        return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      default:
        return 'invalid unit';
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
      case 'gal':
        return 'gallons';
      case 'L':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      default:
        return 'invalid';
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    initNum = this.getNum(initNum);
    initUnit = this.getUnit(initUnit);
    
    if (initNum == 'invalid number' && initUnit == 'invalid unit'){
      return {'string': 'invalid number and unit'};
    }
    if (initNum == 'invalid number'){
      return {'string': initNum};
    }
    if (initUnit == 'invalid unit') {
      return {'string': initUnit};
    }

    const retUnit = this.getReturnUnit(initUnit);
    
    let returnNum = 1;
    switch(retUnit) {
      case 'mi':
        returnNum = initNum / miToKm;
        break;
      case 'km':
        returnNum = initNum * miToKm;
        break;
      case 'gal':
        returnNum = initNum / galToL;
        break;
      case 'L':
        returnNum = initNum * galToL;
        break;
      case 'lbs':
        returnNum = initNum / lbsToKg;
        break;
      case 'kg':
        returnNum = initNum * lbsToKg;
        break;
      default:
        return {'string': retUnit};
    }
    returnNum = parseFloat(returnNum.toFixed(5));
    let string = this.getString(initNum, initUnit, returnNum, retUnit);
    return {'initNum': initNum, 'initUnit': initUnit, 'returnNum': returnNum, 'returnUnit': retUnit, 'string': string};
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spellOutInitUnit = this.spellOutUnit(initUnit);
    const spellOutReturnUnit = this.spellOutUnit(returnUnit);
    
    let result = initNum + ' ' + spellOutInitUnit + ' converts to ' + returnNum + ' ' + spellOutReturnUnit;
    return result;
  };
  
}

module.exports = ConvertHandler;
