const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    dbUrl: process.env.CONNECTION_URL
}