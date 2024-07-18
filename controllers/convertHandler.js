function ConvertHandler() {
  
  this.getNum = function(input) {
    const numError = 'invalid number'
    let i = 0;
    const str = '0123456789./';
    while (i < input.length) {
      if (!str.includes(input[i])) {
        break;
      }
      if ((input[i] == '.' && input[i + 1] == '/') || (input[i] == '/' && input[i + 1] == '.')) { throw numError };
      ++i;
    }
    
    if (!i) {
      return 1;
    }
    let initNum = input.substr(0, i);

    // check if what we found is valid
    const dotCount = (initNum.match(/\./g) || []).length;
    
    const regexSlash = new RegExp('/', 'g');
    const slashCount = (initNum.match(regexSlash) || []).length;
    
    if (dotCount > 1 || slashCount > 1 || initNum[initNum.length - 1] == '/') { throw numError };

    let result = parseFloat(initNum);
    if (slashCount > 0) {
      let indx = initNum.indexOf('/');
      const a = parseFloat(initNum.substr(0, indx));
      const b = parseFloat(initNum.substr(indx + 1));
      
      if (typeof a == 'string' || a instanceof String) { throw numError };
      if (typeof b == 'string' || b instanceof String) { throw numError };
      
      result = a / b;
    } else {
      if (typeof result == 'string' || result instanceof String) { throw numError };
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let i = 0;
    const str = '0123456789./';
    while (i < input.length) {
      if (!str.includes(input[i])) {
        break;
      }
      ++i;
    }
    let initUnit = input.substr(i);

    switch (initUnit.toLowerCase()) {
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
        throw 'invalid unit';
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

    let returnNum = 1;
    switch(initUnit) {
      case 'mi':
        returnNum = initNum * miToKm;
        break;
      case 'km':
        returnNum = initNum / miToKm;
        break;
      case 'gal':
        returnNum = initNum * galToL;
        break;
      case 'L':
        returnNum = initNum / galToL;
        break;
      case 'lbs':
        returnNum = initNum * lbsToKg;
        break;
      case 'kg':
        returnNum = initNum / lbsToKg;
        break;
      default:
        return 'invalid';
    }
    returnNum = parseFloat(returnNum.toFixed(5));
    return returnNum;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spellOutInitUnit = this.spellOutUnit(initUnit);
    const spellOutReturnUnit = this.spellOutUnit(returnUnit);
    
    let result = initNum + ' ' + spellOutInitUnit + ' converts to ' + returnNum + ' ' + spellOutReturnUnit;
    return result;
  };
  
}

module.exports = ConvertHandler;
