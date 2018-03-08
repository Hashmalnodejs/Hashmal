const express = require('express')
const path = require('path')
const router = require('./server/router')

const app = express()

app.use('/static/css', express.static('public/css'))
app.use('/static/js', express.static('public/js'))
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(router)

app.listen(8000, (err) => {
    if(err) {
        console.error(err ? err.stack : err)
        process.exit(255)
    } else {
        console.log('Listening on *:8000')
    }
})