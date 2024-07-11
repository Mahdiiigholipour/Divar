function notFoundRoute(app) {
  app.use((req, res) => {
    res.status(404).json({
      status: 404,
      message: "not found route",
    });
  });
}

module.exports = {
  notFoundRoute,
};