import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('¡Backend funcionando perfectamente! 🚀');
});

app.listen(PORT, () => {
  console.log(`⚡ Servidor corriendo en http://localhost:${PORT}`);
});
app.listen(PORT, () => {
  console.log(`⚡ Servidor corriendo en http://localhost:${PORT}`);
  // ... otros imports
import userRoutes from './routes/userRoutes';

// ... debajo de app.use(express.json());
app.use('/api/users', userRoutes);
});