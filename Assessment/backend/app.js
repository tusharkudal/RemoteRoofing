/*const models = require('../backend/models/users.js')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)*/

/**
Database Connection Starts
**/

//const postgres = require('pg').Pool
//const pool = require('./config/db.config.js');
//const connection = new postgres(pool);


/*const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment',
  password: 'root',
  port: 5432,
});

console.log("connection")
console.log(pool)*/
/**
Database Connection Ends
**/

/**
APIs
*/

//get
/*app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));*/

//get users 
/*app.get('/user/:name', (req, res)=>{

	const name = req.params.name
	res.send(name);
	res.send("user");
	connection.query('SELECT * FROM users WHERE name = $name', [name]).then(res => {

    const fields = res.fields.map(field => field.name);

    res.send(fields);

}).catch(err => {
    console.log(err.stack);
}).finally(() => {
    connection.end()
});
})*/

//get tasks
/*app.get('/task', (req, res)=>{
	res.send("hello wworld");
})*/

//get project
/*app.get('/project', (req, res)=>{
	res.send("hello wworld");
})*/
  
//post user
/*app.post('/createUser', (req, res)=>{
	const { email, name, surname } = req.body
	console.log(req.body)
	
pool.query('INSERT INTO users (email,name,surname) VALUES ($1, $2, $3)', [email,name,surname]).then(res => {

    const fields = res.fields.map(field => field.name);

    res.send("done");

}).catch(err => {
    console.log(err.stack);
}).finally(() => {
    pool.end()
});
	
	})


*/

/**
APIs ends here
*/


//start server
/*app.listen(7000, ()=>{
	console.log('server is running on port 7000');
});*/


/*
curl --data "email=tk@example.com&name=tushar&surname=kudal" http://localhost:7000/users
*/