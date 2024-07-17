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
        return 'error';
    }
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(this.getReturnUnit(initUnit)) {
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
        break;
    }
    let result;
    console.log("initNum: ", initNum, " initUnit: ", initUnit);

    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
