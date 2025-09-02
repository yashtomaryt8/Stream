import express from 'express'
import authRoutes from './routes/auth.routes.js';
import songsRoutes from "../src/routes/song.routes.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app= express();

app.use(cors({
  origin: [
    "http://localhost:5173",         // local frontend
    "https://steam-dusky.vercel.app" // deployed frontend
  ],
  credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


/* POST /auth/register */
/* POST /auth/login */
app.use('/auth',authRoutes)

/* POST /songs/upload */
/* GET /songs/get-songs */
/* GET /songs/get-song/:mama */
/* GET /songs/search-songs */
app.use("/songs",songsRoutes)

export default app;