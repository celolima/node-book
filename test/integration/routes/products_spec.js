describe('Routes: Products', () => {
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
});