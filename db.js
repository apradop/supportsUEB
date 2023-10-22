const mariadb = require('mariadb');
export const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: 'admin',
     database: 'supportueb',
     connectionLimit: 5
});
