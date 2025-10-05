import express from 'express';
import authRoutes from './routes/auth.routes.js';
import songsRoutes from './routes/song.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",          // local frontend
    "https://steam-henna.vercel.app"  // deployed frontend
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Auth routes
// POST /auth/register
// POST /auth/login
// GET /auth/me
app.use('/api/auth', authRoutes);

// ✅ Songs routes
// POST /songs/upload
// GET /songs/get
// GET /songs/get-song/:mama
// GET /songs/search-songs
app.use("/api/songs", songsRoutes);

export default app;
