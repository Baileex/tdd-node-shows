const { fetchAllSchemas, createSchema } = require('../models/schemaModel')

exports.getAllSchemas = (req, res, next) => {
  fetchAllSchemas()
    .then((schemas) => {
      res.status(200).send({ schemas: schemas })
    })
    .catch(next)
}

exports.postSchema = (req, res, next) => {
  const { body } = req
  createSchema(body)
    .then((schema) => {
      res.status(201).send({ schema: schema })
    })
    .catch(next)
}
