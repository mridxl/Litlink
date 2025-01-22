import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { LoginDataSchema } from '../../schemas/auth';
import { prisma } from '../../lib/prisma';
import { createJwtToken, parseZodError } from '../../lib/utils';
import { ZodError } from 'zod';

const loginController: RequestHandler = async (req, res) => {
	try {
		const { email, password } = LoginDataSchema.parse(req.body);
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (!user) {
			throw new Error('Invalid email or password');
		}

		const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
		if (!passwordMatch) {
			throw new Error('Invalid email or password');
		}

		const token = createJwtToken({ userId: user.id });
		res.json({ token });
		return;
	} catch (error) {
		if (error instanceof ZodError) {
			res.status(400).json(parseZodError(error));
			return;
		}
		if (error instanceof Error) {
			res.status(400).json({ message: error.message });
			return;
		}
		res.status(500).send('Internal Server Error');
		return;
	}
};

export default loginController;
