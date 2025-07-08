import {ApiController} from "../controllers/api.controller";
const router = require('express').Router();

import { ServiceFactory } from "../services/service.factory";

export function createApiRoutes(serviceFactory: ServiceFactory) {
    const apiController = new ApiController(serviceFactory);

    router.get('/',apiController.getStories.bind(apiController));

    return router;
}