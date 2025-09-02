import { uploadFile } from '../services/strorage.service.js';
import songModel from '../models/song.model.js';

// UPLOAD SONG
export async function uploadSongController(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await uploadFile(req.file.buffer); 
    const { title, artist } = req.body;

    if (!title || !artist) {
      return res.status(400).json({ message: "Title and artist are required" });
    }

    const song = await songModel.create({
      artist,
      title,
      audio: result.url,
    });

    return res.status(201).json({
      message: "Song uploaded successfully",
      song: {
        id: song._id,
        title: song.title,
        artist: song.artist,
        audio: song.audio,
      },
    });
  } catch (err) {
    console.error("Upload song error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// GET ALL SONGS
export async function getSongs(req, res) {
  try {
    const songs = await songModel.find();
    return res.status(200).json({
      message: "Songs fetched successfully",
      songs,
    });
  } catch (err) {
    console.error("Get songs error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// GET SONG BY ID
export async function getSongById(req, res) {
  try {
    const songId = req.params.id; // ✅ fixed
    const song = await songModel.findById(songId);

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    return res.status(200).json({
      message: "Song fetched successfully",
      song,
    });
  } catch (err) {
    console.error("Get song by ID error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// SEARCH SONGS
export async function searchSong(req, res) {
  try {
    const text = req.query.text || "";
    if (!text) {
      return res.status(200).json({ message: "No search text provided", songs: [] });
    }

    const songs = await songModel.find({
      title: { $regex: text, $options: 'i' }, // case-insensitive
    });

    return res.status(200).json({
      message: "Songs fetched successfully",
      songs,
    });
  } catch (err) {
    console.error("Search songs error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
