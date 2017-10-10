import bannerModel from './../../mongoose/banner';

function saveBanner (req, res) {
  const { ids } = req.query;
  if(!ids) {
    res.send({
      code: 400,
      success: false,
      msgCode: 'id不存在或者为空'
    });
    return;
  }
  bannerModel.update({}, {$set:{
    ids
  }}, function(err){
    if(err) {
      res.send({
        code: 500,
        success: false,
      })
      return;
    }
    res.send({
      code: 200,
      success: true,
    })
  })
}

export default saveBanner;