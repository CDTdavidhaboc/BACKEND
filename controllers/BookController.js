import * as BookModel from '../models/BookModels.js';

//fetch book

export const fetchBooks = async (req, res) => {
    try{
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books});
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

//create book

export const createBook = async (req, res) =>{
    const {title, genre, status} = req.body
    try{
        const bookId = await BookModel.insertBook(title, genre, status);
        res.status(200).json({success: true, message: bookId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}

//edit book 

export const editBook = async (req, res) =>{
    const {title, genre, status} = req.body
    const {bookId} = req.params
    try{
        const updatedId = await BookModel.updateBook(title, genre, status, bookId);
        res.status(200).json({success: true, message: updatedId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}

//delete book 

export const deleteBook = async (req, res) =>{
    const {bookId} = req.params
    try{
        const deleteId = await BookModel.deleteBook(bookId);
        res.status(200).json({success: true, message: deleteId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}