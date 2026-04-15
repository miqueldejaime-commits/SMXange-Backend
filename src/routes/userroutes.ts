import { Router } from 'express';
import { registerUser } from '../controllers/userController';

const router = Router();

// Esta será la ruta: POST http://localhost:3000/api/users/register
router.post('/register', registerUser);

export default router;