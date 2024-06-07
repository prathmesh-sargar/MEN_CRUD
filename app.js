import express from 'express'
import ConnectDB from './db/connectdb.js';   // .js is importent extension here ok 
import {join} from 'path'
import data from './routes/web.js'
import employModel from './models/employ.js';
const app = express();
const port = 3200;

// Static file is used here ok 
app.use(express.static(join(process.cwd(), "public")));

app.use(express.urlencoded({extended:false}))

// Load routes 
console.log(employModel);
app.use("/stu",data);

// Setup templete engine 
app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.send( "this is prathmesh Sargar ok ");
    
})

ConnectDB();

app.listen(port, (err)=>{
    if(err)console.log(err);
    console.log(`port is running on locahost ${port}`);
})
