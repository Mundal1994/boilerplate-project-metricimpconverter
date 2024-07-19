const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  suite('GET /api/convert valid calls', function () {
    test('Test GET /api/convert?input=4gal', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=4gal')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 4);
          assert.equal(res.body.initUnit, 'gal');
          assert.equal(res.body.returnNum, 15.14164);
          assert.equal(res.body.returnUnit, 'L');
          assert.equal(res.body.string, '4 gallons converts to 15.14164 liters');
          done();
        });
    });
    test('Test GET /api/convert?input=1/2km', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=1/2km')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 0.5);
          assert.equal(res.body.initUnit, 'km');
          assert.equal(res.body.returnNum, 0.31069);
          assert.equal(res.body.returnUnit, 'mi');
          assert.equal(res.body.string, '0.5 kilometers converts to 0.31069 miles');
          done();
        });
    });
    test('Test GET /api/convert?input=5.4/3lbs', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=5.4/3lbs')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1.8);
          assert.equal(res.body.initUnit, 'lbs');
          assert.equal(res.body.returnNum, 0.81647);
          assert.equal(res.body.returnUnit, 'kg');
          assert.equal(res.body.string, '1.8 pounds converts to 0.81647 kilograms');
          done();
        });
    });
    test('Test GET /api/convert?input=kg', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, 'kg');
          assert.equal(res.body.returnNum, 2.20462);
          assert.equal(res.body.returnUnit, 'lbs');
          assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
          done();
        });
    });
  });
  suite('GET /api/convert invalid calls', function () {
    test('Test GET /api/convert?input=4//2km', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=4//2km')
        .end(function (err, res) {
          assert.equal(res.body, 'invalid number');
          done();
        });
    });
    test('Test GET /api/convert?input=1g', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=1g')
        .end(function (err, res) {
          assert.equal(res.body, 'invalid unit');
          done();
        });
    });
    test('Test GET /api/convert?input=5./3lbss', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=5./3lbss')
        .end(function (err, res) {
          assert.equal(res.body, 'invalid number and unit');
          done();
        });
    });
  });
});
