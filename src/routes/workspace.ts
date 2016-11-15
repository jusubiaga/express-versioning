/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";
/**
 * @module Route
 */
module Route {
    /**
     * Class represent the Workspace Route
     * @export
     * @class Workspace
     */
    export class Workspace {

        /**
         * Retrieve all Workspaces
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getAll version 1 - Not Implemented yet');
        }

        public getAll2(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getAll version 2 - Not Implemented yet');
        }

        public getById(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getById version 1 - Not Implemented yet');
        }

        public getById2(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getById version 2 - Not Implemented yet');
        }

        public create(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('create - Not Implemented yet');
        }

        public remove(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('remove - Not Implemented yet');
        }

        public getAllprojects(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getAllProject - Not Implemented yet');
        }

    }
}

export = Route;