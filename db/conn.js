const mongoose =require("mongoose");


const DB= "mongodb+srv://hissam:meharuni@cluster0.csl4uj2.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    // usenewUrlParse: true,
    useUnifiedTopology: true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message)); 