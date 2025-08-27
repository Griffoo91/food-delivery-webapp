import express from 'express';
import { addFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${filename.originalname}`)
    }
});

// const router = multer.diskStorage({
//     destination: 'uploads/',
//     filename: () => {
//         return cb(null, `${Date.now()}${file.originaLname}`)
//     }
// });

foodRouter.post('/addfood', addFood);


export default foodRouter;