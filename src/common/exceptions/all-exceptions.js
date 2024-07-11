function allExceptionsHandler(app) {
  app.use((err, req, res, next) => {
    let status = err?.status ?? err?.statusCode ?? err?.code;
    if (!status || isNaN(+status) || status < 200 || status > 500) status = 500;

    res.status(status).json({
      status,
      message: err?.message ?? err?.msg ?? err?.stack ?? "InternalServerError",
    });
  });
}

module.exports = allExceptionsHandler;
