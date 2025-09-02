import app from "./src/app.js";
import connectToDatabase from "./src/db/db.js";

connectToDatabase();

app.get("/", (req, res) => {
  res.send("✅ API is working in Backend");
});


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
    })

export default app;
