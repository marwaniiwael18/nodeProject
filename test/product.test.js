const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const Product = require('../product');

chai.use(chaiHttp);


describe('/First Test Collection', () => {

// it('should verify that we have 1 products in the DB', (done) => {
//     chai.request(server).get('/api/products')
//     .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('array');
//         res.body.length.should.be.eql(0);
//         done();
//     });
// });


it('should POST a valid product', (done) => {
        
    let product = {
        name: "Test Product",
        description: "Test Product Description",
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