import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import indexRoutes from './routes/index.routes';

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Unisinos Academic Tutoring Registration API');
});

// Start server
app.listen(PORT, () => {
  console.log(Server running on port );
});

export default app;
