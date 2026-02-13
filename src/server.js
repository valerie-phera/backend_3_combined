import express from "express";
import cors from "cors";

import imagesRouter from "./routes/images.router.js";
import errorHandler from "./middlewares/errorHandler.js";

const startServer = () => {
    const app = express();

    const allowedOrigins = [
        "http://localhost:5173",
        process.env.FRONTEND_URL
    ].filter(Boolean);
    // Removes undefined values so env variable is optional

    app.use(
        cors({
            origin: (origin, callback) => {
                // Allow non-browser requests (no origin)
                if (!origin) return callback(null, true);

                // Allow only whitelisted frontend origins
                if (allowedOrigins.includes(origin)) {
                    return callback(null, true);
                }

                // Block everything else
                return callback(new Error("CORS blocked: " + origin), false);
            },
        })
    );

    // Healthcheck endpoint for uptime monitoring (used by hosting/platform tools)
    app.get("/api/health", (req, res) => {
        res.status(200).json({
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    });

    app.use(express.json());

    app.use("/api/upload", imagesRouter);

    app.use(errorHandler);  // Centralized error handling (must be last middleware)

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

export default startServer;