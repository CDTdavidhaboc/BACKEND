import pool from './db.js';

export const getStudents = async () => {
    const[rows] = await pool.query("SELECT * From tblstudent");
    return rows;
}