const mysql = require("mysql2/promise");
const pool = mysql.createPool({
	host: "localhost",
	port: 3306,
	user: "ella",
	password: "000000",
	database: "ella",
	connectionLimit: 10,
	waitForConnections: true
});

// async await 하기 전



// async await 적용
const sqlExec = (sql, sqlVals) => {
	pool.getConnection((error, connect) => {
		if(error) console.log(error);
		else {
			connect.query(sql, sqlVals, (error, result) => {
				connect.release();
				if(error) console.log(error);
				else console.log(result);
			})
		}
	});
}