var mysql = require('mysql');
var con = mysql.createConnection({
        host : 'localhost',
        port : 3306,
        user : 'root',
        password :'',
        database : 'company'
});
con.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Connection established successfully... ");
    }
})