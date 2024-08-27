const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const restApi = require("./restApi");

function route(app) {
  app.use("/api", restApi);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);

  // Middleware xử lý lỗi 404 (nên đặt sau tất cả các route)
  app.use((req, res, next) => {
    res.status(404).json({ message: "Không tìm thấy trang" });
  });
}

module.exports = route;
