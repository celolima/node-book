import ProductsController from '../../../src/controllers/products.js';

import sinon from 'sinon';
import chai from 'chai';
import Product from '../../../src/models/product.js';
import { reporters } from 'mocha';

const expect = chai.expect;

describe('Controllers: Products', () => {
    const defaultProduct = [{
        name: 'Default Product',
        describe: 'product description',
        price: 100
    }];

    describe('get() products', () => {
        it('should return a list of products', async () => {
            const request = {};
            const response = {
                send: sinon.spy()
            };

            Product.find = sinon.stub();
            Product.find.withArgs({}).resolves(defaultProduct);
            const productsController = new ProductsController(Product);

            await productsController.get(request,response);

            sinon.assert.calledWith(response.send,defaultProduct);
        });

        it('should return 400 when error occurs', async () => {
            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            // Define qua quando o status for chamando com argumento 400, retorna o response
            response.status.withArgs(400).returns(response);

            Product.find = sinon.stub();

            //Quando fizer um find, no model Product, com argumento vazio, retorna mensagem de 'Error'
            Product.find.withArgs({}).rejects({message: 'Error'});

            const productsController = new ProductsController(Product);

            await productsController.get(request,response);

            sinon.assert.calledWith(response.send,'Error');
        });        
    });
});