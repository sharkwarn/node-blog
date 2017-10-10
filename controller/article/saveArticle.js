import ArticleModel from './../../mongoose/article';

const saveArticle = (req, res) => { 
  const { creator, name, content, titleImg } = req.body;
  const errorArr = [];
  if (!creator) {
    errorArr.push('创建者不存在！');
  }

  if (!name) {
    errorArr.push('文章标题不存在！');
  }
  
  if (!content) {
    errorArr.push('文章内容不存在！');
  }

  if (!titleImg) {
    errorArr.push('文章主题图片不存在！');
  }

  if (errorArr.length > 0) {
    res.send({
      code: 400,
      success: false,
      msgCode: errorArr.join('、')
    });
    return;
  }

  const time = new Date().getTime();
  const article = new ArticleModel({
    name: name,
    time: time,
    creator: creator,
    titleImg: titleImg,
    editor: '',
    editTime: 0,
    content: content
  });
  article.save((err, data) => {
    if (err) {
      res.send({
        code: 500,
        success: false,
        msgCode: JSON.stringify(err)
      });
      return;
    }
    res.send({
      code: 200,
      success: true,
      id: article['_id']
    });
  })
}

export default saveArticle;