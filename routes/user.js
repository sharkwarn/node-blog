import express from 'express';

import login from '../controller/user/login';
import register from '../controller/user/register';

const router = express.Router();

router.post('/register', register)

router.post('/login', login);

export default router;