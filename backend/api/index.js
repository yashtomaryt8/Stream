import app from "../backend/src/app.js";
import connectToDatabase from "../backend/src/db/db.js";
import serverless from "serverless-http";

connectToDatabase();

export default serverless(app);
