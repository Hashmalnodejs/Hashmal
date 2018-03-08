const express = require('express')
const pug = require('pug')
const fakeDB = require('../helpers/fake-db.js')
const currency = require('./currency.js')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.render('loader', {
    title: 'Hashmal',
    h1: `Hashmal`,
  })
})

router.get('/home', (req, res) => {
  res.render('index', {
    title: 'Hashmal',
    h1: `Hashmal`,
    h3: `Découvrez la technologie du futur`
  })
})

router.get('/products', (req, res) => {
    const currencies = currency.getCurrency()
        .then(result => {
            return result
        })
    Promise.all([currencies])
        .then(curr => {
            let factor = 1
            let nameCurr ="EUR"
            if (typeof req.query.currency !== 'undefined') {
                factor = curr[0].rates[req.query.currency]
                nameCurr = req.query.currency
            }
            if (req.query.currency == 'EUR') {
                    factor = 1
            }

            fakeDB.getAll()
                .then(products => {
                        res.render('products',{
                            products: products,
                            currencies: curr,
                            factor: factor,
                            curr: nameCurr
                        })
                })
        })
})

router.get('/product/:id', (req, res) => {
    const id = req.params.id

    const currencies = currency.getCurrency()
        .then(result => {
            return result
        })
    Promise.all([currencies])
        .then(curr => {
            let factor = 1
            let nameCurr ="EUR"
            if (typeof req.query.currency !== 'undefined') {
                factor = curr[0].rates[req.query.currency]
                nameCurr = req.query.currency
            }
            if (req.query.currency == 'EUR') {
                factor = 1
            }
            fakeDB.getOne(id)
                .then(product => {
                    console.log(currencies)
                    res.render('product', {
                        product: product,
                        currencies: curr,
                        curr: req.query.currency,
                        factor: factor
                    })
                })

        })
})


router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add', (req, res) => {
    fakeDB.add({
        name: req.body.name,
        priceEur: req.body.priceEur
    },
        (err, res) => {
        console.log(res)
    })

    res.redirect('/add')
})