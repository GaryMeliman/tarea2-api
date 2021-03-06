const express = require("express");
const bodyParser = require("body-parser");
const Routes = require("./routes");
const cors = require("cors");

require('dotenv').config();

class App {
  constructor() {
    this.expressApp = express();
    this.configs = {
      get port() {
        return process.env.PORT || 8080;
      },
    };
  }

  applyMiddleware() {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(cors());
    new Routes(this.expressApp);
  }

  run() {
    this.expressApp.listen(this.configs.port, () => {
      console.log(
        "Express server running project on port " + this.configs.port + "."
      );
      console.log(`Environment: ${process.env.STAGE || "development"}`);
    });
  }
}

const app = new App();
app.applyMiddleware();
app.run();
