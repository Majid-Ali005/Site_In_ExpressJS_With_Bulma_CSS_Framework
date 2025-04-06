const express = require('express')
const app = express()
const port = 3000

//Route to home page
app.get('/', (req, res) => {
  res.render("home.ejs")
})

//Route to about page
app.get('/about', (req, res) => {
    res.render("about.ejs")
  })

  //Route to contact page
  app.get('/contact', (req, res) => {
    res.render("contact.ejs")
  })
//Route to login page
  app.get('/login', (req, res) => {
    res.render("login.ejs")
  })
//Route to signup page
  app.get('/signup', (req, res) => {
    res.render("signup.ejs")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})