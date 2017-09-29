import {markdown} from 'markdown';
import ArticleModel from './../../mongoose/article';

const updateArticle = (req, res) => {
  console.log('yes');
  const {id, creator, name, content } = req.body;
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

  if (errorArr.length > 0) {
    res.send({
      code: 400,
      success: false,
      msgCode: errorArr.join('、')
    });
    return;
  }

  const editTime = new Date().getTime();
  
  ArticleModel.update({_id: id}, {$set:{
    name: name,
    editor: creator,
    editTime: editTime,
    content: markdown.toHTML(content)
  }},function(err){
    if(err){
      console.log(err);
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
    });
  })
}

export default updateArticle;