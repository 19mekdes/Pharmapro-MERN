import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import Product from "./models/Product.js"

dotenv.config()
connectDB()

const products = [
  {
    name: "Paracetamol 500mg",
    description: "Pain reliever and fever reducer",
    price: 5,
    image: "/uploads/paracetamol.jpg",
    category: "Medicine",
    countInStock: 100,
  },
  {
    name: "Vitamin C Tablets",
    description: "Boosts immunity and overall health",
    price: 8,
    image: "/uploads/vitamin-c.jpg",
    category: "Supplements",
    countInStock: 50,
  },
  {
    name: "Blood Pressure Monitor",
    description: "Digital monitor for tracking blood pressure",
    price: 45,
    image: "/uploads/bp-monitor.jpg",
    category: "Devices",
    countInStock: 20,
  },
]

const importData = async () => {
  try {
    await Product.deleteMany() 
    await Product.insertMany(products)
    console.log("✅ Data Imported!")
    process.exit()
  } catch (error) {
    console.error("❌ Error importing data:", error)
    process.exit(1)
  }
}

importData()