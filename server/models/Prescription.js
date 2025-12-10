import mongoose from "mongoose"

const prescriptionSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
    customerName: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
)

const Prescription = mongoose.model("Prescription", prescriptionSchema)
export default Prescription