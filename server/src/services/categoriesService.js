import { categoryModel } from "../models/categoryModel";

export const getCategories = async () => {
  const categories = await categoryModel.find({});
  return categories;
};

export const getCategoryById = async (id) => {
  return await categoryModel.findById(id);
};

export const createCategory = async (category) => {
  const createdCategory = await categoryModel.create(category);
  return createdCategory;
};

export const updateCategory = async (id, category) => {
  return await categoryModel.findByIdAndUpdate(id, category, { new: true });
};

export const deleteCategory = async (id) => {
  return await categoryModel.findByIdAndDelete(id);
};
