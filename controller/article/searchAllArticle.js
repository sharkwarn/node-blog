import ArticleModel from './../../mongoose/article';

const searchAllArticle = (req, res) => {
  ArticleModel.find({},function(err,data){
    if (err) {
      console.log(err);
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
  })
}

export default searchAllArticle;