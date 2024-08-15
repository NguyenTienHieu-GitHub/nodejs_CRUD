const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const hbs = require("express-handlebars");
const SortMiddleware = require("./app/middlewares/SortMiddleware");

const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(methodOverride("_method"));

// Custom middlewares
app.use(SortMiddleware);

// Templates engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: require('./helpers/handlebars'),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// HTTP logger
app.use(morgan("combined"));

// Router init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
