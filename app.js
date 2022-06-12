require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const { PORT, URL } = process.env;
const morgan = require("morgan");
const bodyParser = require("body-parser");

// app.use(cors());
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(express.json({ limit: "50mb" }));
// app.use(cookieParser());
// app.use(morgan("dev"));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", URL);
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "*"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
console.log(222, URL):
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", URL); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening :)");
});
