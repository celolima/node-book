const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req,res) => res.send('HW!'))

app.get('/products', (req,res) => res.send([{
    name: 'Default Product',
    describe: 'product description',
    price: 100
}]))

module.exports = app;