import mongoose from "mongoose"

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
)

const Order = mongoose.model("Order", orderSchema)
export default Order