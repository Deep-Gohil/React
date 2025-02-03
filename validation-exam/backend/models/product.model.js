const mongoose= require("mongoose")

const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
  title: { type: String},
  description: { type: String },
  price: { type: Number,},
  img: { type: String,  },
  createdAt: { type: Date, default: Date.now },
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;