import formidable from 'formidable';
import http from 'http';
import util from 'util';
import fs from 'fs'


class fileUpload {
  constructor(){

  }
  async saveFile(req,res){
    const form = new formidable.IncomingForm();
    //设置上传路径
    form.uploadDir = "./uploads";

    form.parse(req,(err,fields,files)=>{
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
  }
}

export default new fileUpload();