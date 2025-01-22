import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';

const app = express();
const port = 3000;

app.use(
	cors({
		origin: 'http://localhost:5173',
	})
);
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello, welcome to the litlink backend!');
});

app.use('/auth', authRouter);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
