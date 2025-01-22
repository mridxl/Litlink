import { RequestHandler } from 'express';
import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import { RegisterDataSchema } from '../../schemas/auth';
import { createJwtToken, parseZodError } from '../../lib/utils';
import { prisma } from '../../lib/prisma';

const registerController: RequestHandler = async (req, res) => {
	try {
		const { email, password, name } = RegisterDataSchema.parse(req.body);
		const existingUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (existingUser) {
			throw new Error('User already exists');
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: {
				email,
				hashedPassword,
				name,
			},
		});

		const token = createJwtToken({ userId: user.id });
		res.status(201).json({ token });
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

export default registerController;
