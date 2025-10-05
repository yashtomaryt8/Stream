// import app from "./src/app.js";
// import connectToDatabase from "./src/db/db.js";

// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("✅ API is working in Backend");
// });

// connectToDatabase()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ Failed to connect to DB:", err);
//     process.exit(1);
//   });


import app from "./src/app.js";
import connectToDatabase from "./src/db/db.js";

// Connect to MongoDB (only once)
await connectToDatabase();

// Export the Express app for Vercel
export default app;
