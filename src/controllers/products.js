class ProductsController {
    constructor() {        
    } 

    get(req,res) {
        return res.send ([{
            name: 'Default Product',
            describe: 'product description',
            price: 100
        }]);
    }
}

export {ProductsController};