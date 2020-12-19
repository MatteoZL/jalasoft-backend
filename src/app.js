import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes/index.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

export default app;
