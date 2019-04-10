const express = require('express');
const cors = require('cors');

const mysql = require('mysql');
const validator = require('email-validator');

const port = process.env.PORT || 3000
const app = express()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
});

app.post('/emails', (req, res) => {
    const email = String(req.body.email);
        console.log(email);

        if(validator.validate(email)){
            
            const con = mysql.createConnection({
                host: process.env.DB_HOST || 'localhost',
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                port: process.env.DBPORT || 3306,
                database: 'logan44977'
            });

            con.connect(function(err) {
                if(err) throw err;
            });

            console.log('connected');
            
            // MAKE THIS SAFER TOMORROW SO NO SQL INJECTIONS
            const sql = `SELECT * FROM emails WHERE email = ?`;

            con.query(sql, [email], function(err, result){
                if(err) throw err;

                if(result.length !== 0){
                    res.json({message: "401"});
                    con.end();
                    console.log('connection ended due to already existed');
                }
                else{
                    // passed
                    const sqlUpdate = `INSERT INTO emails (email) VALUES (?)`;
                    
                    con.query(sqlUpdate, [email], function(err, result){
                        if(err) throw err;
                        else{
                            res.json({message: "200"});
                            con.end();
                            console.log('connection ended');
                        }
                    })
                }

            });


        }
        else{
            res.json({message: "406"}, {error: "Please enter a valid email address!"});
            console.log('please enter a valid email address');
        }
            

        
})

app.listen(port, err => {
    if (err) throw err
    console.log('> Ready On Server')
})