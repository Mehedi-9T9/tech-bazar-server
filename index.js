const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT | 5000
const mongoose = require('mongoose');
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())



//chek server
app.get("/", async (req, res) => {
    res.send("server is running")
}
)

//Database Connent
mongoose.connect(process.env.URI)
    .then(() => console.log("Database Connect Successfull"))
    .catch((error) => console.log(error))


app.listen(port, () => {
    console.log(`server in running port:${port}`);
})