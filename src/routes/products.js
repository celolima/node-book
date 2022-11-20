import express from 'express';
import ProductsController from '../controllers/products.js';
import Product from '../models/product.js'

const router = express.Router();
const controller = new ProductsController(Product);

router.get('/', (req,res) => {  
    controller.get(req,res);
});

export default router;