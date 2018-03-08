const fs = require('fs')
module.exports = {
    getCurrency
}
function getCurrency(){
  return new Promise ((resolve,reject) => {
    fs.readFile('./helpers/forex.json', (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    })
  })
}
// getCurrency().then( result => {
//   console.log(result)
// })
