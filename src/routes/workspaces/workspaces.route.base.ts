/// <reference path="../../_all.d.ts" />
"use strict";

import * as express from "express";

    /**
     * Class represent the Workspace Route Base
     * @export
     * @class WorkspaceBase
     */
    export class WorkspacesBase {

        /**
         * Retrieve all Workspaces
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

        /**
         * Retrieve one Workspace
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public getById(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

        /**
         * Create Workspace
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public create(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

        /**
         * Remove Workspace
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public remove(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

        /**
         * Retrieve all project from a Workspace
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public getAllProjects(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

        /**
         * Create a project
         * @param {express.Request} req - The Request.
         * @param {express.Response} res - The Response.
         * @param {express.NextFunction} next - The Next Middleware.
         */
        public createProjects(req: express.Request, res: express.Response, next: express.NextFunction) {
            // TBD
        }

    }    