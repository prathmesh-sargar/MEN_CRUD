
import mongoose from "mongoose";
import employModel from "../models/employ.js";
class StudentController 
{

    static createDoc = async(req,res)=>{
        console.log("Created document ok .....");
        // console.log(req.body.name);
        // object decture ok 
        const {name ,title,role} = req.body;
        const doc = new employModel({
            name: name,
            title: title,
            role : role
        })
        const result = await doc.save();
        res.redirect("/stu/getdata")
    }

    static getDoc = async(req,res)=>{

        try {
           const getdata = await employModel.find();
        //    console.log(getdata);
            res.render("index",{data:getdata});
        } catch (error) {
            console.log(error);   
        }  
    }




    static editeDoc = async(req,res)=>{

        // console.log(req.params.id);
        try {
            const result= await employModel.findById(req.params.id)
            // console.log(result);
            res.render("edit",{edit:result});
        } catch (error) {
            
        }

       
    }
    static UpdateDoc = async (req,res)=>{
        // console.log(req.params.id);
        // console.log(req.body);

        try {
            const result = await employModel.findByIdAndUpdate(req.params.id,req.body);
            
        } catch (error) {
            console.log(error);
        }

        res.redirect("/stu/getdata")
    }
    static deleteDoc = async(req,res)=>{
            
        try {
            const result = await employModel.findByIdAndDelete(req.params.id);
            
        } catch (error) {
            console.log(error);
        }

        res.redirect("/stu/getdata")
    }  
        
         
        // res.redirect("/getdata")
};

export default StudentController;