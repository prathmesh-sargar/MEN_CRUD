import mongoose from "mongoose";


// Define Schema 

const employSchema = new mongoose.Schema({

    name:{type:String, require:true ,trim:true},
    title: {type:String , require:true},
    role:{type:String , require:true ,trim: true }
   
})

// Here we are creating model ok ....
const employModel = mongoose.model('employ',employSchema);



export default employModel;
