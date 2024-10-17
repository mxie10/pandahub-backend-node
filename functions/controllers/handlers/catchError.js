exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch((error) => {
        // Server Error
        return res.status(500).json({
          success: false,
          result: null,
          message: error.message,
          controller: fn.name,
          error: error,
        });
    });
  };
};