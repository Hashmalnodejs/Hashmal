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

router.get('/list', (req, res) => {
    res.render('list')
})
