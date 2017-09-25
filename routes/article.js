import express from 'express';

import getArticle from './../controller/article/getArticle';

const router = express.Router();

router.get('/getarticle', getArticle);

export default router;
