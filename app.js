const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send('error')
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send('error')
});

module.exports = app
