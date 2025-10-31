const express = require('express');
const app = express();

app.use(express.json());

let books = [
    {
        id:"1",
        "title":"Book One"
      },
      {
        id:"2",
        "title":"Book Two"
      },

];


app.get("/",(req,res)=>{
    res.json("Welcome to your store");  
});

app.get("/books",(req,res)=>{
    res.json(books);      
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

