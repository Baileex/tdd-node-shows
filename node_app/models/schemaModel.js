const connection = require('../db/knex')

const fetchAllSchemas = () => {
  return connection
    .select('*')
    .from('schemas')
    .returning('*')
    .then((schemas) => {
      if (!schemas) {
        return Promise.reject({
          status: 404,
          msg: 'No Schemas Found in Database',
        })
      } else {
        return schemas
      }
    })
}

const createSchema = (schema) => {
  return connection
    .insert(schema)
    .into('schemas')
    .returning('*')
    .then(([schema]) => {
      return schema
    })
}

module.exports = {
  fetchAllSchemas,
  createSchema,
}
