import express from 'express';
import fileUpload from './../controller/fileUpload';
import getUploadFile from './../controller/upload/getUploadFile';
const router = express.Router();

router.post('/saveFile',fileUpload.saveFile);
router.get('/getfile',getUploadFile);

export default router;