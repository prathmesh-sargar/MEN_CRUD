import mongoose from 'mongoose'


const options = {
    dbName : "CRUD"
}

const ConnectDB = async (req,res)=>{

    try {

     
        const result = await mongoose.connect("mongodb://localhost:27017/CRUD");
        console.log("Connect to mongoDB Server ..... ");
        
        
    } catch (error) {
        
       console.log(" Something goes wrong ok ..... ",error);
    }

}

export default ConnectDB;
