class ProductsController {
    constructor(Product) { // Model
        this.Product = Product;
    } 

    async get(req,res) {
        try {
            const products = await this.Product.find({});
            return res.send(products);
        } catch(err) {
            res.status(400).send(err.message);
        }
    }
}

export default ProductsController;