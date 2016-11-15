"use strict";
const express = require("express");
class ApiRouter {
    constructor() {
        this.router = express.Router();
    }
    getRouter() {
        return this.router;
    }
    addRoute(version, path, router, defaultRoute = false) {
        this.router.use('/' + version + '/' + path, router);
        if (defaultRoute) {
            this.router.use('/' + path, router);
        }
    }
}
exports.ApiRouter = ApiRouter;
