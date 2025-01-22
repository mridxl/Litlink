import { Router } from 'express';
import loginController from '../controllers/auth/login.controller';
import registerController from '../controllers/auth/register.controller';

const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.post('/register', registerController);

export default authRouter;
