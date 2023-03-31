import express from "express";
import verifyToken from "../middlewares/verifyToken";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../services/categoriesService";

const categoriesRouter = express.Router();

categoriesRouter.get("/me", verifyToken, (req, res) => {
  return res.json(req.user);
});

categoriesRouter.get("/", async (req, res) => {
  res.json(await getCategories());
});

categoriesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategoryById(id));
});

categoriesRouter.post("/", async (req, res) => {
  const category = req.body;
  res.json(await createCategory(category));
});

categoriesRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const category = req.body;
  res.json(await updateCategory(id, category));
});

categoriesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteCategory(id));
});

export default categoriesRouter;
