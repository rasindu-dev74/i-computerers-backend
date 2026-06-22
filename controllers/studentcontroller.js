import Student from "../models/student.js"
import { isAdmin } from "./usercontroller.js"


export function getallstudent(req,res){
        Student.find().then(
            (std)=>{
                console.log(std)
                res.json(std)
            }
        )
    }

export async function createstudent(req,res){

    if(isAdmin(req)){
         const student1= await new Student(req.body)
        student1.save()
        res.json(student1)

    }
           
        console.log(req.user);

        
        console.log(req.body)

        
        
    }    