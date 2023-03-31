import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const categoryModel = mongoose.model("Category", categorySchema);

// import mongoose from "mongoose";

// export const User = {
//   name: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   role: {
//     type: mongoose.Types.ObjectId,
//     ref: "UserRole",
//   },
//   roles: {
//     type: [mongoose.Types.ObjectId],
//     ref: "UserRole",
//   },

//   password: String,
// };

// export const userSchema = new mongoose.Schema(User, { timestamps: true });
// export const userModel = mongoose.model("User", userSchema);
