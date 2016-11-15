"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const api_router_1 = require("./routes/api.router");
const api_workspaces_router_1 = require("./routes/api.workspaces.router");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jade");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router = express.Router();
        var index = new indexRouter.Index();
        router.get('/', index.index.bind(index.index));
        this.app.use(router);
        let apiRouter = new api_router_1.ApiRouter();
        let apiWorkspacesRouter = new api_workspaces_router_1.ApiWorkspacesRouter();
        apiRouter.addRoute('v1', 'workspaces', apiWorkspacesRouter.getRouter('v1'));
        apiRouter.addRoute('v2', 'workspaces', apiWorkspacesRouter.getRouter('v2'), true);
        this.app.use(apiRouter.getRouter());
    }
}
var server = Server.bootstrap();
module.exports = server.app;
