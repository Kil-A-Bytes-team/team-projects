import express, { json } from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import userRolesRouter from "./routers/userRolesRouter";
import authRouter from "./routers/authRouter";
import filesRouter from "./routers/filesRouter";
import { signInUser, signUpUser } from "./services/authService";
import categoriesRouter from "./routers/categoriesRouter";
import { createCategory } from "./services/categoriesService";

export const app = express();
app.use(json());
app.use(cors());

app.post("/api/categories", async (req, res) => {
  const { name } = req.body;
  const response = await createCategory({ name });
  res.status(response.status).json(response);
});

app.use(authRouter);
app.use("/api/users", usersRouter);
app.use("/api/userRoles", userRolesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/files", filesRouter);

export default app;
