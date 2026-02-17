const errorHandler = (error, _, res, __) => {
    console.error("Error:", error.message);

    const { status = 500, message } = error;
    res.status(status).json({
        success: false,
        status,
        message,
    });
};

export default errorHandler;
// check