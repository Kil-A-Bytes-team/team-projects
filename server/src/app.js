import express, { json } from "express";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import userRolesRouter from "./routers/userRolesRouter";
import authRouter from "./routers/authRoter";
import filesRouter from "./routers/filesRouter";
import { signInUser, signUpUser } from "./services/authService";
import categoriesRouter from "./routers/categoriesRouter";
import { createCategory } from "./services/categoriesService";

export const app = express();
app.use(json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { email, password, repassword } = req.body;
  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password did not match" });
  }
  const user = await signUpUser({ email, password });
  console.log(user);
  return res.status(200).json({ success: true, message: "Sign Up successful" });
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const response = await signInUser({ email, password });
  res.status(response.status).json(response);
});

app.post("/categories", async (req, res) => {
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
