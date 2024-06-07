import express from 'express'
import StudentController from '../controllers/StudentController.js';
const router = express();

router.get("/getdata", StudentController.getDoc);
router.post("/getdata", StudentController.createDoc);
router.post("/update/:id", StudentController.UpdateDoc);
router.get("/deletedoc/:id", StudentController.deleteDoc);
router.get("/edit/:id", StudentController.editeDoc);



export default router;
