const express = require('express')
const pug = require('pug')
const fakeDB = require('../helpers/fake-db.js')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Hashmal',
    h1: `Hashmal`
  })
})

router.get('/products', (req, res) => {
    fakeDB.getAll()
        .then(products => {
            res.render('products',{
                products: products
            })
        })
})


router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add', (req, res) => {
    console.log(req.params)
    // console.log(fakeDB.add({
    //     name: req.body.name,
    //     priceEur: req.body.priceEur
    // },
    //     (err, res) => {
    //     console.log(res)
    // }))
})