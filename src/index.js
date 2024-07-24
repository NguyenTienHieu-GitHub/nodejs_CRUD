const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')

const app = express()
const port = 3000

// Templates engine
app.engine('hbs', hbs.engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
   
// HTTP logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})