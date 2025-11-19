import * as StudentController from '../controllers/StudentController.js';
import express from "express";
import checkToken from "../middleware/authenticationHandler.js";


const studentRoutes = express.Router();

studentRoutes.use(checkToken);
studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudents);
studentRoutes.put('/edit/:studentId', StudentController.editStudents);
studentRoutes.delete('/delete/:studentId', StudentController.deleteStudents)



export default studentRoutes;