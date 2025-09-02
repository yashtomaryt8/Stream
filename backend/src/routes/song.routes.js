import express from 'express';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import {
  uploadSongController,
  getSongs,
  getSongById,
  searchSong,
} from '../controllers/song.controller.js';

const router = express.Router();

// Multer setup
const storage = multer.memoryStorage();
const uploadMiddleware = multer({ storage });

// ✅ JWT Auth Middleware (only for protected routes)
function authMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "defaultsecret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// ✅ Routes
router.post('/upload', authMiddleware, uploadMiddleware.single('audio'), uploadSongController);

router.get('/get', getSongs);

router.get('/search-songs', searchSong);

router.get('/get-song/:id', getSongById); // ✅ changed from :mama to :id

export default router;
