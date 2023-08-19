const sql = require('mysql')
const connection = sql.createConnection({ host: 'bkzgngdw1evgrrvck5cs-mysql.services.clever-cloud.com', user: 'ugl5srpkkmipf3q2', password: '7ycGWMFG6SJTvP7ryG3j', database: 'bkzgngdw1evgrrvck5cs', port: 3306, },)

connection.connect((err) => {
    if (err) throw err;
    else {
        console.log('database connected');
    }
})


module.exports = { connection }