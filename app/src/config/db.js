const mysql = require("mysql");

const db = mysql.createConnection({
    host: "yongyong.c6cmzsxwungj.ap-northeast-2.rds.amazonaws.com",
    user: "yongyong",
    password: "yong1998",
    database: "yongyong"
});

db.connect();

module.exports = db;