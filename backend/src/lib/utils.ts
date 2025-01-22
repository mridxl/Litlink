import { ZodError } from 'zod';
import jwt from 'jsonwebtoken';
import { Request } from 'express';

export function parseZodError(error: ZodError) {
	return error.errors[0].message;
}

export function createJwtToken(payload: any) {
	return jwt.sign(payload, process.env.JWT_SECRET!, {
		expiresIn: '7 days',
	});
}

export function verifyJwtToken(token: string) {
	return jwt.verify(token, process.env.JWT_SECRET!);
}

export function getJwtTokenFromReq(req: Request) {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		throw new Error('No authorization header');
	}
	const token = authHeader.split(' ')[1];
	return token;
}
