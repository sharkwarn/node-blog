import express from 'express';

import getArticle from './../controller/article/getArticle';
import saveArticle from './../controller/article/saveArticle';
import findArticle from './../controller/article/findArticle';
import updateArticle from './../controller/article/updateArticle';
import searchAllArticle from './../controller/article/searchAllArticle';

const router = express.Router();

router.get('/getarticle', getArticle);

router.post('/savearticle', saveArticle);

router.post('/updatearticle', updateArticle);

router.get('/findarticle', findArticle);

router.get('/searchAllArticle', searchAllArticle);

export default router;
