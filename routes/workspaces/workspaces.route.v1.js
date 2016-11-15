"use strict";
const workspaces_route_base_1 = require("./workspaces.route.base");
class WorkspacesV1 extends workspaces_route_base_1.WorkspacesBase {
    constructor() {
        super();
    }
    getAll(req, res, next) {
        res.send('getAll version 1 - Not Implemented yet');
    }
    getById(req, res, next) {
        res.send('getByI version 1 - Not Implemented yet');
    }
    create(req, res, next) {
        res.send('create version 1 - Not Implemented yet');
    }
    remove(req, res, next) {
        res.send('remove version 1 - Not Implemented yet');
    }
    getAllProjects(req, res, next) {
        res.send('getAllProjects version 1 - Not Implemented yet');
    }
    createProject(req, res, next) {
        res.send('createProject version 1 - Not Implemented yet');
    }
}
exports.WorkspacesV1 = WorkspacesV1;
