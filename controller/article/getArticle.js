import fs from 'fs';
import {markdown} from 'markdown';

const getArticle = (req, res) => {
  fs.readFile('./article/hehe.md', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(markdown.toHTML(data))
  });
}
export default getArticle;
