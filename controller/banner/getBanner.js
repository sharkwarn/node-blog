import mongoose from 'mongoose';
import bannerModel from './../../mongoose/banner';
import articleModel from './../../mongoose/article';

function getBanenr (req, res) {
  bannerModel.find({}, function(err, data){
    if (err) {
      console.log(err);
      res.send({
        code: 500,
        success: false,
        msgCode: err
      });
      return;
    }
    if (data && data.length == 0) {
      const banner = new bannerModel({
        ids: [],
      });
      banner.save(function(err) {
        if(err) {
          console.log('初始第一次banner数据库时',err);
          res.send({
            code: 500,
            success: false,
            msgCode: err
          });
          return;
        }
        res.send({
          code: 200,
          success: true,
          data: data
        });
        return;
      })
    } else {
      const getIds = data[0].ids;
      if (getIds === 0) {
        res.send({
          code: 200,
          success: true,
          data: []
        });
      }
      const arr = [];
      getIds.map((item) => {
        arr.push(`(${mongoose.Types.ObjectId(item)})?`);
      })    
      const reg = new RegExp(arr.join(''));
      articleModel.find({ '_id': getIds },function(err, data){
        // console.log(data);
        if (err) {
          console.log(err);
          res.send({
            code: 200,
            success: false,
            msgCode: '没有查询到结果或者数据不存在',
            data: {}
          });
          return;
        }
        res.send({
          code: 200,
          success: true,
          data: data
        })
      })

    }
    
  })
}

export default getBanenr;
