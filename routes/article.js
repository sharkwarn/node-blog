import express from 'express';

import getArticle from './../controller/article/getArticle';
import saveArticle from './../controller/article/saveArticle';
import findArticle from './../controller/article/findArticle';

const router = express.Router();

router.get('/getarticle', getArticle);

router.post('/savearticle', saveArticle);

router.get('/findarticle', findArticle);

export default router;
