const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const ageCheckerMiddleware = (req, res, next) => {
  if (!req.query.age) return res.redirect('/')

  return next()
}

app.get('/', (req, res) => {
  return res.render('home')
})

app.get('/minor', ageCheckerMiddleware, (req, res) => {
  return res.render('minor', { age: req.query.age })
})
app.get('/major', ageCheckerMiddleware, (req, res) => {
  return res.render('major', { age: req.query.age })
})

app.post('/check', (req, res) => {
  const { age } = req.body

  if (!age) {
    return res.redirect('/')
  }
  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
})

app.listen('3001')
