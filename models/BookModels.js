import pool from './db.js';


//get book

export const getBooks = async () => {
    const[rows] = await pool.query("SELECT * From tblbook");
    return rows;
}

//insert book

export const insertBook = async (title, genre, status) => {
    const [result] = await pool.query(
        "INSERT INTO tblbook(title, genre, status) VALUES(?,?,?)",
        [title, genre, status]
    );  
    return result.insertId;
}

//update book

export const updateBook = async (title, genre, status, bookId) => {
    const [result] = await pool.query(
        "UPDATE tblbook SET title = ?, genre = ?, status = ? WHERE id = ?",
        [title, genre, status, bookId]
    );  
    return result.affectedRows;
}

//deletebook

export const deleteBook = async (bookId) => {
    const [result] = await pool.query(
        "DELETE FROM tblbook WHERE id =?", [bookId]
    );  
    return result.affectedRows;
}