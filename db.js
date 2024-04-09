const mariadb = require('mariadb');
export const pool = mariadb.createPool({
     host: 'localhost',
     port: '3308', 
     user:'root', 
     password: '12345',
     database: 'supportueb',
     connectionLimit: 5
});
