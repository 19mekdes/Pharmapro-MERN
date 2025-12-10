import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import path from "path"
import cors from "cors"

dotenv.config()
connectDB()

const app = express()


app.use(express.json())
app.use(cors()) 


app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)


const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "server/uploads")))


if (process.env.NODE_ENV === "production") {
  const clientPath = path.join(__dirname, "../client/dist")
  app.use(express.static(clientPath))

  app.get("*", (_req, res) =>
    res.sendFile(path.resolve(clientPath, "index.html"))
  )
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))