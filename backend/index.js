import app from "./src/app.js";
import connectToDatabase from "./src/db/db.js";

connectToDatabase()

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ API is working in Backend");
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
