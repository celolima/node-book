import express from 'express';
const router = express.Router();

router.get('/', (req,res) => res.send([{
    name: 'Default Product',
    describe: 'product description',
    price: 100
}]))

export default router;