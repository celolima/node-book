import Product from "../../../src/models/product.js";

describe('Routes: Products', () => {
    
    let request, app;

    before(async () => {
        app = await setupApp();
        request = supertest(app);
    });

    const defaultProduct = {
        _id: defaultID,
        name: 'Default Product',
        description: 'products description',
        price: 100
    };

    const expectedProduct = {
        __v: 0,
        _id: '507f1f77bcf86cd799439011',
        name: 'Default Product',
        description: 'products description',
        price: 100
    };

    beforeEach(async() => {
        await Product.deleteMany();

        const product = new Product(defaultProduct);
        return await product.save();
    });

    afterEach(async() => await Product.deleteMany());

    describe('GET /products', () => {
        it('should return a list of products', done => {
            request
                .get('/products')
                .expect(200)
                .expect([expectedProduct])
                .end(function(err, res) {
                    if (err) throw err;
                    done();
                });
        })
    });

    after(async () => await app.database.close());
});