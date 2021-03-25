const express = require('express')
const app = express()
const path = require('path')

const dt = new Date()
console.log(dt)

const firstMidlware = (req, res, next) => {
  if((dt.getDay() === 6) || (dt.getDay()  === 0) || (dt.getHours() < 9) || (dt.getHours() > 16))
       res.render('close')
  else
        next()

}
app.set('view engine', 'ejs');

app.use('/', firstMidlware)
app.use(express.static(path.join(__dirname, 'Res')))



app.listen(3000, (err) => {
    if (err) throw err
    else console.log('Server is runing...')
})