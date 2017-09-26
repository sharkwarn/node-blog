import ArticleSchema from './schema/articleSchema';
import db from './index';

const AtricleModel = db.model('article', ArticleSchema);


export default AtricleModel;