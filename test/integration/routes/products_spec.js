describe('Routes: Products', () => {

    let request, app;

    before(async () => {
        app = await setupApp();
        request = supertest(app);
    });

    const defaultProduct = {
        name: 'Default Product',
        describe: 'product description',
        price: 100
    };

    describe('GET /products', () => {
        it('should return a list of products', done => {
            request
                .get('/products')
                .expect(200)
                .expect([defaultProduct])
                .end(function(err, res) {
                    if (err) throw err;
                    done();
                });
        })
    });

    after(async () => await app.database.close());
});