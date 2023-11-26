import express from "express";
import cors from "cors";
import { json } from "body-parser";
import adsRouter from "./routes/adsRouter";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(json());
app.use("/", adsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app; // Export the app for testing purposes
