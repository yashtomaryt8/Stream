import express from 'express';
import authRoutes from './routes/auth.routes.js';
import songsRoutes from './routes/song.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://steam-henna.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/songs', songsRoutes);

export default app;
