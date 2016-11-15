"use strict";
var Route;
(function (Route) {
    class Index {
        index(req, res, next) {
            res.render('index', { title: 'Express' });
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
