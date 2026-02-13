import "dotenv/config";
import startServer from "./server.js";

const bootstrap = async () => {
    try {
        startServer();
        console.log("Server started successfully");
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1); 
    }
};

bootstrap();