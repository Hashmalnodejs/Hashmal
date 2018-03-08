const express = require('express')
const path = require('path')
const router = require('./server/router')

const app = express()

/**
 * Si la requête est effectué entre la 49éme et la 59éme minute, nous renvoyons une erreur 408. (timeout error)
 */
app.use((req, res, next) => {
    const minutes = new Date().getMinutes()
    if (minutes > 48 && minutes <= 59) {
        res.status(408)
        res.render('408')
    } else {
        console.log('ok')
    }
    next()
})

app.use('/static/css', express.static('public/css'))
app.use('/static/js', express.static('public/js'))
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(router)

/**
 * Si la route n'est pas trouvé, nous renvoyons une erreur 404. (not found)
 */
router.get('*', (req, res, next) => {
    res.status(404)
    res.render('404')
})

app.listen(8000, (err) => {
    if(err) {
        console.error(err ? err.stack : err)
        process.exit(255)
    } else {
        console.log('Listening on *:8000')
    }
})
