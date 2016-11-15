/// <reference path="../../_all.d.ts" />
"use strict";

import * as express from "express";
import { WorkspacesBase } from "./workspaces.route.base";

    export class WorkspacesV1 extends WorkspacesBase {

        constructor() {
            super();
        }

        public getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getAll version 1 - Not Implemented yet');
        }

        public getById(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getByI version 1 - Not Implemented yet');
        }

        public create(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('create version 1 - Not Implemented yet');
        }

        public remove(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('remove version 1 - Not Implemented yet');
        }

        public getAllProjects(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('getAllProjects version 1 - Not Implemented yet');
        }

        public createProject(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.send('createProject version 1 - Not Implemented yet');
        }

    }
