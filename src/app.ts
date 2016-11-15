/// <reference path="_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as indexRouter from "./routes/index";
import * as workspaceRouter from "./routes/workspace";

import { ApiRouter} from "./routes/api.router";
import { WorkspacesV1 } from "./routes/workspaces/workspaces.route.v1";
import { WorkspacesV2 } from "./routes/workspaces/workspaces.route.v2";
import { ApiWorkspacesRouter } from "./routes/api.workspaces.router";


/**
 * The server.
 *
 * @class Server
 */
class Server {

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        // create express application
        this.app = express();

        // configure app
        this.config();

        // configure routes
        this.routes();

    }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    //configure jade
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "jade");

    //mount logger
    //this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(express.static(path.join(__dirname, "bower_components")));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
   private routes() {
       // get router
       let router: express.Router = express.Router();

    //    // create routes
       var index: indexRouter.Index = new indexRouter.Index();

       // Index Routes
       router.get('/', index.index.bind(index.index));

       // use router midleware
       this.app.use(router);

       let apiRouter: ApiRouter = new ApiRouter();
       let apiWorkspacesRouter: ApiWorkspacesRouter = new ApiWorkspacesRouter();

       apiRouter.addRoute('v1', 'workspaces', apiWorkspacesRouter.getRouter('v1'));
       apiRouter.addRoute('v2', 'workspaces', apiWorkspacesRouter.getRouter('v2'), true);

       //apiRouter.config();
       this.app.use(apiRouter.getRouter());
   }
}

var server = Server.bootstrap();
export = server.app;