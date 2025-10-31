const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let books=[
    {
        id:1,
        title:"The Great Gatsby",   
    },
    {
        id:2,
        title:"To Kill a Mockingbird",
    }

];


app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the Book API!" 
     } );
});
app.get("/get", (req, res) => {
  res.json(books);
});
app.get('/getBooks',(req,res)=>{


    //console.log("books"+books);
    res.json(books);
});


app.get('/getBook/:id',(req,res)=>{
    const bookId = parseInt(req.params.id);
    console.log(books.find((item)=>item.id))
    const book = books.find((item)=>item.id === bookId);
    if(book){
        res.json(book);
    } else {
        res.status(404).json({message:"Book not found"});
    }
})  

app.post('/addBook',(req,res)=>{
    const newBook ={
        id : Math.floor(Math.random()*1000).toString(),
        title : `Book ${Math.floor(Math.random() * 1000)}`,
    };
    books.push(newBook);
    res.status(201).json({
        data:newBook,
        message:"Book added successfully"
 } );
});



app.put("/update/:id", (req, res) => {
      const bookId = parseInt(req.params.id);
    console.log("Update Book ID:", bookId);
    
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === bookId
    
  );
  console.log("Found Book:", findCurrentBook);
   console.log(req.body.title)
  if (findCurrentBook) {
   // console.log(req.body.title)
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
}); 
  
app.delete("/delete/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === bookId
  );
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});


