function ConvertHandler() {
  
  this.getNum = function(input) {
    const dotCount = (input.match(/\./g) || []).length;

    const regexSlash = new RegExp('/', 'g');
    const slashCount = (input.match(regexSlash) || []).length;

    if (dotCount > 1 || slashCount > 1)
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
        return 'error';
    }
  };
  /*
  lbs --> kg multiply
  kg --> lbs divide

  gal --> L multiply
  L --> gal divide

  mi --> km multiply
  km --> mi divide
  */
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    initNum = this.getNum(initNum);
    initUnit = this.getUnit(initUnit);
    
    if (initNum == 'invalid number' && initUnit == 'invalid unit'){
      console.log("invalid number and unit");
      return 'invalid number and unit';
    }
    if (initNum == 'invalid number'){
      console.log("invalid number");
      return initNum;
    }
    if (initUnit == 'invalid unit') {
      console.log("invalid unit");
      return initUnit;
    }

    const retUnit = this.getReturnUnit(initUnit);
    
    let returnNum = 1;
    switch(retUnit) {
      case 'mi':
        returnNum = initNum / miToKm;
        break;
      case 'km':
        console.log("return unit km");
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
        console.log("no valid return value");
        return retUnit;
    }
    returnNum = parseFloat(returnNum.toFixed(5));
    let string = this.getString(initNum, initUnit, returnNum, retUnit);
    return {initNum, initUnit, returnNum, retUnit, string};
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const spellOutInitUnit = this.spellOutUnit(initUnit);
    const spellOutReturnUnit = this.spellOutUnit(returnUnit);
    
    let result = initNum + ' ' + spellOutInitUnit + ' converts to ' + returnNum + ' ' + spellOutReturnUnit;
    
    console.log("result: ", result);
    return result;
  };
  
}

module.exports = ConvertHandler;
