import express from 'express';
import  {getUsersList} from '../../controllers/users/users.js';

const router = express.Router();
router.get('', getUsersList);

export default router;