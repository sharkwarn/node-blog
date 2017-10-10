import express from 'express';
import getBanner from './../controller/banner/getBanner';
import saveBanner from './../controller/banner/saveBanner';

const router = express.Router();


router.get('/getBanner', getBanner);

router.get('/saveBanner', saveBanner);

export default router;