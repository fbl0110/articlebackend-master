var mysql = require('mysql');

let dbConfig = require("../config/db.json");


//连接数据库
var connection = mysql.createConnection({
    // 展开参数
    ...dbConfig
});

//连接mysql
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

// 暴露模块的内容
module.exports = dbquery;