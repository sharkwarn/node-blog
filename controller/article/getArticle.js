import fs from 'fs';
import ArticleModel from './../../mongoose/article';

const getArticle = (req, res) => {
  fs.readFile('./article/hehe.md', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data)
  });
}
export default getArticle;
