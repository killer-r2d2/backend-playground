import express from "express";
import apiRoutes from "./routes/api.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
