import upload from "./upload.js";

const uploadMiddleware = (req, res, next) => {
    upload.single("image")(req, res, (err) => {
        if (err) return next(err);
        next();
    });
};

export default uploadMiddleware;

