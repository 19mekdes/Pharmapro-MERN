import express from "express"
import multerMiddleware from "../middleware/multer.js"
import { uploadPrescription } from "../controllers/uploadController.js"

const router = express.Router()

router.post("/", multerMiddleware.single("image"), uploadPrescription)

export default router