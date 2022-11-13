import express from 'express';
import ProductsController from '../controllers/products.js';

const router = express.Router();
const controller = new ProductsController();

router.get('/', (req,res) => {  
    controller.get(req,res);
});

export default router;