import formidable from 'formidable';
import http from 'http';
import util from 'util';
import fs from 'fs'


class fileUpload {
  constructor(){

  }
  async saveFile(req,res){
    try {
      const form = new formidable.IncomingForm();
      //设置上传路径
      form.uploadDir = "./uploads";
  
      form.parse(req,(err,fields,files)=>{
        console.log(files);
        const {path,name,type,size} = files.fname;
        
        const oldPath = './'+path;
        const newPath = `/uploadfile/${new Date().getTime()}${name}`;
        fs.rename(oldPath,`.${newPath}`,(err)=>{
          if(err){
            console.log(err);
            return;
          }
        })
        res.send({
          'code': 200,
          'url':`localhost:5000${newPath}`
        });
      })
    } catch(err) {
      res.send({
        'code': 500,
        'success': false,
        'url':err
      });
    }
    
  }
}

export default new fileUpload();