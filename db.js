const mariadb = require('mariadb');
export const pool = mariadb.createPool({
     host: process.env.DB_HOST, 
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: process.env.DB_DATABASE,
     connectionLimit: process.env.DB_CONNECTION
});

export function imprimir(){
     console.log("Total connections: ", pool.totalConnections());
     console.log("Active connections: ", pool.activeConnections());
     console.log("Idle connections: ", pool.idleConnections());
}
