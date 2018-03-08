const express = require('express')
const path = require('path')
const morgan = require('morgan')
const router = require('./server/router')
const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/static', express.static('public'))


/**
 * Si la requête est effectué entre la 49éme et la 59éme minute, nous renvoyons une erreur 408. (timeout error)
 * Ajout du return pour éviter l'erreur "Can't set headers after they are sent "
 */
// app.use((req, res, next) => {
//     const minutes = new Date().getMinutes()
//     if (minutes > 48 && minutes <= 59) {
//         return res.status(408).render('408')
//     }
//     next()
// })


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(router)

/**
 * Si la route n'est pas trouvé, nous renvoyons une erreur 404. (not found)
 */
router.get('*', (req, res) => {
    return res.status(404).render('404')
})

app.listen(8000, (err) => {
    if(err) {
        console.error(err ? err.stack : err)
        process.exit(255)
    } else {
        console.log('Listening on *:8000')
    }
})
