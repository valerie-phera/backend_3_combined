const messageList = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
}

const HttpException = (status, message = messageList[status] || "Error") => {
    const error = new Error(message);
    error.name = "HttpException";
    error.status = status;
    return error;
}

export default HttpException;