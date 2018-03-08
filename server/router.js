const express = require('express')
const pug = require('pug')
const fakeDB = require('../helpers/fake-db.js')
const currency = require('./currency.js')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hashmal',
        h1: `Hashmal`
    })
})

router.get('/products', (req, res) => {
    const currencies = currency.getCurrency()
        .then(result => {
            return result
        })
    Promise.all([currencies])
        .then(curr => {
            let factor
            if (req.query.currency !== 'EUR') {
                factor = curr[0].rates[req.query.currency]
            }else {
                factor = 1
            }
            fakeDB.getAll()
                .then(products => {
                        res.render('products',{
                            products: products,
                            currencies: curr,
                            curr: req.query.currency,
                            factor: factor
                        })
                })
        })
})

