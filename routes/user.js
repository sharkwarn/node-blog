import express from 'express';

import login from '../controller/login';

const router = express.Router();

router.get('/login',login);

export default router;