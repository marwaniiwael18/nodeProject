require('dotenv').config({ path: '.env.test' });

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const Product = require('../product');

const mongoose = require('mongoose');


chai.use(chaiHttp);


// beforeAll(async () => {
//     // Connect to the test database before running tests
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//   });
  
//   afterAll(async () => {
//     // Disconnect from the test database after tests
//     await mongoose.disconnect();
//   });

describe('Test', () => {





it('should POST a valid product', (done) => {
        
    let product = {
        name: "Test Product",
        price: 100,
        quantity: 20
    }
    chai.request(server)
    .post('/api/products')
    .send(product)
    .end((err, res) => {
        res.should.have.status(201);
        
        done();

    });

});

});