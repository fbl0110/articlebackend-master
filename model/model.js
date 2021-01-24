var mysql = require('mysql');

// 导入数据库的配置参数
let dbConfig = require("../config/my_sql.json");


var connection = mysql.createConnection({
    // 参数展开
    ...dbConfig
});


connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('connect mysql success');
});


function dbquery(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, data) => {
            if (err) { reject(err); }
            resolve(data)
        })
    })
}

module.exports = dbquery;