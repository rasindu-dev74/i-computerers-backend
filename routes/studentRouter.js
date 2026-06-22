import express from "express";
import Student from "../models/student.js"
import { createstudent, getallstudent } from "../controllers/studentcontroller.js";

const studentRouter=express.Router()

studentRouter.get("/",getallstudent)

studentRouter.post("/",createstudent)


export default studentRouter
