import app from "../src/app.js";
import connectToDatabase from "../src/db/db.js";
import serverless from "serverless-http";

// connect to DB only once
connectToDatabase();

export default serverless(app);
