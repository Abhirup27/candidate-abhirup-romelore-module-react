import {Repository} from "typeorm";
import {Story} from "../database/entities/story.entity";
import {User} from "../database/entities/user.entity";

export class ApiService {
    constructor(
        private storyRepository: Repository<Story>,
        private userRepository: Repository<User>,
    ) {
    }
    async getStories(): Promise<Story[]> {


        const stories = await this.storyRepository.findBy({ });
        return stories;
    }

}