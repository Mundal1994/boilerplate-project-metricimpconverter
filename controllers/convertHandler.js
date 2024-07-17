function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
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
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const retUnit = this.getReturnUnit(initUnit);

    switch(retUnit) {
      case 'mi':
        // calculation
        break;
      case 'km':
        console.log("return unit km");
        break;
      case 'gal':
      case 'L':
      case 'lbs':
      case 'kg':
        break;
      default:
        return retUnit;
    }
    console.log("initNum: ", initNum, " initUnit: ", initUnit);
    let string = this.getString(initNum, initUnit, 500, retUnit);
    let val = 500;
    return {initNum, initUnit, val, retUnit, string};
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
