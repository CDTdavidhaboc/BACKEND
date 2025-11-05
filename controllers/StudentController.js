import * as StudentModels from '../models/StudentModels.js';

export const fetchStudents = async (req, res) => {
    try{
        const students = await StudentModels.getStudents();
        res.status(200).json({success: true, message: students});
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudents = async (req, res) =>{
    const {srcode, name, course} = req.body
    try{
        const studentId = await StudentModels.insertStudent(srcode, name, course);
        res.status(200).json({success: true, message: studentId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}

//edit book 

export const editStudents = async (req, res) =>{
    const {srcode, name, course} = req.body
    const {studentId} = req.params
    try{
        const updatedId = await StudentModels.updateStudent(srcode, name, course, studentId);
        res.status(200).json({success: true, message: updatedId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}

//delete book 

export const deleteStudents = async (req, res) =>{
    const {studentId} = req.params
    try{
        const deleteId = await StudentModels.deleteStudent(studentId);
        res.status(200).json({success: true, message: deleteId})
    }catch(e){
        console.log(e)
        res.status(500).json({success:  false, message: "Internal Serve Error"})
    }
}