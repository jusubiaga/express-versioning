"use strict";
const express = require("express");
const workspaces_route_v1_1 = require("./workspaces/workspaces.route.v1");
const workspaces_route_v2_1 = require("./workspaces/workspaces.route.v2");
class ApiWorkspacesRouter {
    constructor() {
        this.routers = {};
        this.config();
    }
    config() {
        let keyv1 = 'v1';
        let keyv2 = 'v2';
        this.routers[keyv1] = express.Router();
        this.routers[keyv2] = express.Router();
        let workspacesV1 = new workspaces_route_v1_1.WorkspacesV1();
        let workspacesV2 = new workspaces_route_v2_1.WorkspacesV2();
        this.routers[keyv1].get('/', workspacesV1.getAll.bind(workspacesV1.getAll));
        this.routers[keyv2].get('/', workspacesV2.getAll.bind(workspacesV2.getAll));
        this.routers[keyv1].get('/:id', workspacesV1.getById.bind(workspacesV1.getById));
        this.routers[keyv2].get('/:id', workspacesV2.getById.bind(workspacesV2.getById));
    }
    getRouters() {
        return this.routers;
    }
    getRouter(version) {
        return this.routers[version];
    }
}
exports.ApiWorkspacesRouter = ApiWorkspacesRouter;
