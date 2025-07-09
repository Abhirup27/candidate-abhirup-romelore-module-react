import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import {Story} from "../entities/story.entity";

export class Seeder1751994303230 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = dataSource.getRepository(Story);
        const storyFactory = factoryManager.get(Story);
        await storyFactory.saveMany(10);
    }
}
