const book = require("../models/book");
const Book  = require("../models/book");
const { all } = require("../routes/book-route");

// const getAllBooks = async (req, res) => {
//     try{
//         const allBooks = await Book.find({});
//         if()
//     }catch(error){
//         res.status(500).json({message:"Server Error"});
//     }


// };

const getAllBooks = async (req, res) => {

  try {
    const allBooks = await Book.find({});
    console.log(allBooks);
    if(allBooks){
      res.status(200).json({
        success: true,
        message: "All books retrieved successfully",
        data: allBooks,
      });
    } 
    else{
       res.status(404).json({
        success: false,
        message: "No books found in collection",
      });
    }
  }
  catch(error){
    res.status(500).json({message:"Server Error"});
  }
}



const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    console.log("Data for book creation"+newBookFormData);
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message || "Server Error",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with a different ID",
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsByID,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const updateBook = async (req, res) => {
  try{
    const bookId = req.params.id;
    const updatedData = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      updatedData,

    )

    
    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedData,
    });

  } catch(error){
    res.status(500).json({message:"Server Error"}); 
  }
}
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID",
      });
      exit(1);
    }

    res.status(200).json({
      success: true,
      message: "Deleted Sucessfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};
module.exports = {
  addNewBook,
  getAllBooks,
  getSingleBookById,
  updateBook,
  deleteBook
};