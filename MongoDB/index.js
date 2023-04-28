const express = require("express");

const db_connection = require("./db_connection")
const app = express()

app.get("/", (req, res) =>{
    res.send("Working");
});

db_connection.then(()=>{
    app.listen(3000, ()=>{
        console.log("Server is running on http://localhost:3000")
    })
}).catch((err)=>{
    console.log("problem to connect to database")
    console.log(err)
})