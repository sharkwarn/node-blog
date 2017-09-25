import fs from 'fs';
import config from './../../config';

const getUploadFile = (req, res) => {
  fs.readdir('./uploadfile', (err, files) => {
    
    const arr = files.map((item) => {
      return `${config.img}${item}`;
    })
    res.send({
      code: 200,
      data: arr,
      success: true
    });
  })
}
export default getUploadFile;