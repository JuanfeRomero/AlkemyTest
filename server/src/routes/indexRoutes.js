import { Router } from 'express';
const router = Router();

//controllers
import { getUsers } from '../controllers/indexControllers.js'

router.get('/users',  getUsers);

export default router;