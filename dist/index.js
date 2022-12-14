"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./res/config");
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const bodyParser = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const Logging_1 = __importDefault(require("./helpers/Logging"));
const Response_1 = __importDefault(require("./helpers/Response"));
const httpStatus = require("http-status");
const app = (0, express_1.default)();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(config_1.config.mongo.url, {
    retryWrites: true, w: "majority",
})
    .then(() => {
    Logging_1.default.info("connected successfully");
    createServer();
})
    .catch((err) => {
    Logging_1.default.log(err);
});
const createServer = () => {
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
    app.use(bodyParser.text({ limit: "50mb" }));
    app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
    app.use("/api/v1", bookRoutes_1.default);
    app.get('/', (req, res) => {
        Response_1.default.success(res, null, "Api initialized", httpStatus.OK);
        Logging_1.default.info("Api initialized");
    });
    app.use("*", (req, res, next) => {
        Response_1.default.fail(res, "OOps routes not found", httpStatus.NOT_FOUND);
    });
};
app.listen(config_1.config.server.port, () => {
    Logging_1.default.log(`listening on port ${config_1.config.server.port}`);
});
exports.default = app;
