import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, "server/uploads/")
  },
  filename(_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const fileFilter = (_req, file, cb) => {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    cb(null, true)
  } else {
    cb(new Error("Images only!"))
  }
}

const multerMiddleware = multer({ storage, fileFilter })
export default multerMiddleware