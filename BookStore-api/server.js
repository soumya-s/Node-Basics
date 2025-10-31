require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const bookRoute = require("./routes/book-route"); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/books",require("./routes/book-route"));

connectDB();
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);   

})