import mongoose from 'mongoose';
import AtricleModel from './../../mongoose/article';

const findArticle = (req, res) => {
  const {id} = req.query;
  if (!id) {
    res.send({
      code: 400,
       success: false,
       msgCode: '缺少id参数'
    });
    return;
  }
  AtricleModel.findByName(id,function(err, data){
    if (err) {
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
};

export default findArticle;