const Pool = require('pg').Pool
require('dotenv').config()
connectionString = process.env.URI_POSTGRES
const pool = new Pool({
    connectionString
})

module.exports = pool
