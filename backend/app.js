import express from "express";
import dotenv from "dotenv";
import path from "path";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import userRoutes from "./src/user/routes/user.routes.js";
import cookieParser from "cookie-parser";

const configPath = path.resolve("backend", "config", "uat.env");
// dotenv.config({ path: "backend/config.uat.env" });
dotenv.config({ path: configPath });

const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(handleUncaughtError);

// setting staic path for public folder
app.use(express.static(path.resolve("backend", "public")));

// configure routes
app.use("/api/storefleet/user", userRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;
