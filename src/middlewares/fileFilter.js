import HttpException from "../utils/HttpException.js";

// Allowed MIME types for uploaded images
const allowedMimes = ["image/png", "image/jpeg"];

const fileFilter = (req, file, callback) => {
    const { mimetype, originalname } = file;

    // Explicit .exe protection (some browsers may send misleading MIME types)
    if (originalname.endsWith(".exe") || mimetype === "application/x-msdownload") {
        return callback(HttpException(400, ".exe files are not allowed"));
    }

    // Block files that are not in the list of allowed image types
    if (!allowedMimes.includes(mimetype)) {
        return callback(HttpException(400, "Only PNG or JPEG images are allowed"));
    }

    // If passed all checks — accept the file
    callback(null, true);
};

export default fileFilter;