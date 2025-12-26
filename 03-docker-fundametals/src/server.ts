import express from "express";
import apiRoutes from "./routes/api.routes";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000
const APP_NAME = process.env.APP_NAME || 'app'

app.use(express.json());
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running on port ${PORT}`)
})

