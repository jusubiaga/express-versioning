/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

import { WorkspacesV1 } from "./workspaces/workspaces.route.v1";
import { WorkspacesV2 } from "./workspaces/workspaces.route.v2";


/**
 * Class represent the API Workspaces Router
 * @export
 * @class ApiWorkspacesRouter
 */
export class ApiWorkspacesRouter {
    private routers: { [key: string]: express.Router } = {};

    constructor() {
        this.config();
    }

    private config() {
       let keyv1 = 'v1';
       let keyv2 = 'v2';

       this.routers[keyv1] = express.Router();
       this.routers[keyv2] = express.Router();

       let workspacesV1: WorkspacesV1 = new WorkspacesV1();
       let workspacesV2: WorkspacesV2 = new WorkspacesV2();

        /**
         * @api {get} /workspaces List all workspaces
         * @apiVersion 0.1.0
         * @apiName GetWorkspaces
         * @apiGroup Workspaces
         *
         * @apiSuccess {String} id Workspace ID.
         * @apiSuccess {String} name Workspace Name
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *    [ 
         *      {
         *       "id": "475bdc58-8fe3-4f5f-b0d6-87205172c21b",
         *       "name": "Nodejs workspace"
         *      }
         *  ...
         *    ]
         *
         */
       this.routers[keyv1].get('/', workspacesV1.getAll.bind(workspacesV1.getAll));

        /**
         * @api {get} /workspaces List all workspaces
         * @apiVersion 0.2.0
         * @apiName GetWorkspaces
         * @apiGroup Workspaces
         *
         * @apiSuccess {String} id Workspace ID.
         * @apiSuccess {String} name Workspace Name
         * @apiSuccess {Date} creation date
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *    [ 
         *      {
         *       "id": "475bdc58-8fe3-4f5f-b0d6-87205172c21b",
         *       "name": "Nodejs workspace"
         *       "creationDate": "date"
         *      }
         *  ...
         *    ]
         *
         */
       this.routers[keyv2].get('/', workspacesV2.getAll.bind(workspacesV2.getAll));

        /**
         * @api {get} /workspaces/:id Get Workspace
         * @apiVersion 0.1.0
         * @apiName GetWorkspace
         * @apiGroup Workspaces
         *
         * @apiParam {Number} id Workspace unique ID.
         *
         * @apiSuccess {String} id Workspace ID.
         * @apiSuccess {String} name Workspace Name
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "id": "475bdc58-8fe3-4f5f-b0d6-87205172c21b",
         *       "name": "Nodejs workspace"
         *     }
         *
         * @apiError WorkspaceNotFound The id of the Workspace was not found.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "WorkspaceNotFound"
         *     }
         */
       this.routers[keyv1].get('/:id', workspacesV1.getById.bind(workspacesV1.getById));

        /**
         * @api {get} /workspaces/:id Get Workspace
         * @apiVersion 0.2.0
         * @apiName GetWorkspace
         * @apiGroup Workspaces
         *
         * @apiParam {Number} id Workspace unique ID.
         *
         * @apiSuccess {String} id Workspace ID.
         * @apiSuccess {String} name Workspace Name
         * @apiSuccess {Date} creation date 
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "id": "475bdc58-8fe3-4f5f-b0d6-87205172c21b",
         *       "name": "Nodejs workspace",
         *       "creationDate": "date"
         *     }
         *
         * @apiError WorkspaceNotFound The id of the Workspace was not found.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "WorkspaceNotFound"
         *     }
         */
       this.routers[keyv2].get('/:id', workspacesV2.getById.bind(workspacesV2.getById));
    }

    public getRouters() {
        return this.routers;
    }

    public getRouter(version: string) {
        return this.routers[version];
    }

}    