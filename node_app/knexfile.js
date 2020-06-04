// Update with your config settings.
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  development: {
    client: 'pg',
    // change connection string to use locally!
    // connection: {
    //   database: 'vehicle_checkin',
    // },
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  test: {
    client: 'pg',
    // change connection string to use locally!
    // connection: {
    //   database: 'vehicle_checkin_test',
    // },
    connection: process.env.DATABASE_URL_TEST,

    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
}
