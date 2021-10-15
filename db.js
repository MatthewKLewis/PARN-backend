const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: '1GaryGygax',
    host: 'localhost',
    port: 5432,
    database: 'parnsos',
})

module.exports = pool;