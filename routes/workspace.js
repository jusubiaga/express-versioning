"use strict";
var Route;
(function (Route) {
    class Workspace {
        getAll(req, res, next) {
            res.send('getAll version 1 - Not Implemented yet');
        }
        getAll2(req, res, next) {
            res.send('getAll version 2 - Not Implemented yet');
        }
        getById(req, res, next) {
            res.send('getById version 1 - Not Implemented yet');
        }
        getById2(req, res, next) {
            res.send('getById version 2 - Not Implemented yet');
        }
        create(req, res, next) {
            res.send('create - Not Implemented yet');
        }
        remove(req, res, next) {
            res.send('remove - Not Implemented yet');
        }
        getAllprojects(req, res, next) {
            res.send('getAllProject - Not Implemented yet');
        }
    }
    Route.Workspace = Workspace;
})(Route || (Route = {}));
module.exports = Route;
