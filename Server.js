var sql = require('mssql');

var dbConfig = {
    server: 'localhost\\SQLEXPRESS',
    database: 'test',
    user: 'sa',
    password: 'thinksys@123',
    port: "1433"
};

sql.connect(dbConfig, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    var fs = require('fs');
    var data = fs.readFileSync('./slqQuery/query.sql');

    // console.log(data.toString());
    // query to the database and get the records
    request.query(data.toString(), function (err, recordset) {

        if (err) console.log(err)

        console.log(recordset);
        // send records as a response
        // res.send(recordset);
        sql.close();
    });
});