import { Router } from "express";
import { signInUser, signUpUser } from "../services/authService";

const authRouter = Router();

authRouter.post("/api/signup", async (req, res) => {
  const { email, password, repassword } = req.body;
  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password did not match" });
  }
  try {
    await signUpUser({ email, password });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
  return res.status(200).json({ success: true, message: "Sign Up successful" });
});
authRouter.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  const response = await signInUser({ email, password });
  res.status(response.status).json(response);
});

export default authRouter;
