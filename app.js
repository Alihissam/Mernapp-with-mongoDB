require ("dotenv").config();
const express = require ("express");

const app =express();
const mongoose =require("mongoose");
const users =require("./models/userSchema");
const cors =require("cors");
const router =require('./routes/router');

require("./db/conn");

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`server is start port number ${port}`);
});