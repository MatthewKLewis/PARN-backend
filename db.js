const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'postgrespassword',
    host: 'localhost',
    port: 5432,
    database: 'parntodo',
})

module.exports = pool;