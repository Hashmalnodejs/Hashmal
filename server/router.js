const express = require('express')
const pug = require('pug')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Hashmal',
    h1: `Hashmal`
  })
})
