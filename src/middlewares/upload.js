import multer from "multer";
import fileFilter from "./fileFilter.js";

const storage = multer.memoryStorage();

const limits = {
  fileSize: 10 * 1024 * 1024, // 10MB
};

const upload = multer({ storage, limits, fileFilter });

export default upload;