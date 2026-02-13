import analyzePH from "../utils/analyzePH.js";

export const imagesController = async (req, res, next) => {
    try {
        // Validate that the request includes a file
        if (!req.file) {
            return next({
                status: 400,
                message: "Image file is required"
            });
        }

        // Destructure relevant file properties from multer
        const { buffer, mimetype, originalname, size } = req.file;

        // Perform simulated pH analysis on the uploaded image
        const result = await analyzePH({
            buffer,
            mimetype,
            originalname,
            size
        });

        // Respond with pH analysis result
        res.status(200).json({
            phValue: result.phValue,
            date: result.date,
            confidence: result.confidence,
        });

    } catch (error) {
        // Pass errors to the global error handler
        next(error);
    }
};