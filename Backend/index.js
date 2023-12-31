const express = require('express');
require('dotenv').config()
const app = express();

//mongo atals connection
const connection = require("./server/server")
//
//convert data in json format 
app.use(express.json())
//

//server run on diffrent origin use cors inbuilt middleware
const cors=require('cors');
app.use(cors());
//
//user Router for login and registration
const userRouter=require("./routes/User.Route")
app.use("/users",userRouter)
app.get("/", (req, res) => {
    res.setHeader("Content-type", 'text/html');
    res.send(`<h1>Space User Authentication</h1>`)
})

//

const port = process.env.PORT;
app.listen(port, async () => {
    try {
        await connection
        console.log("connected to Database")
    } catch (error) {
        console.log("unable to connect to database")
        res.status(404).send(error.message)
    }
    console.log(`Server is running on port ${port}`)
})