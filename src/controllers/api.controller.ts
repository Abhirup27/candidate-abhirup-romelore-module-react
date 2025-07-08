import {Request, Response} from 'express';
import {User} from "../database/entities/user.entity";
import {UserService} from "../services/user.service";
import ex from "../types/express"
import {BaseController} from "./base.controller";
import {ApiService} from "../services/api.service";

export class ApiController extends BaseController {
    private get ApiService(): ApiService {
        return this.serviceFactory.createApiService();
    }
    async getStories(req: Request, res: Response) {
        try {
            const stories = await this.ApiService.getStories();
            res.json(stories);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }

    //async getRaffle
}