const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const apiRouter = require('./routes/apiRouter')

const app = express()

// use helmet
app.use(helmet())


if (process.env.NODE_ENV != 'test') {
  app.use(logger('dev'))
}
app.use(express.json())


app.use('/api/v1', apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
// development
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err,
    })
  })
}
// production
app.use((err, req, res, next) => {
  // send blank error message
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {},
  })
})



module.exports = app
