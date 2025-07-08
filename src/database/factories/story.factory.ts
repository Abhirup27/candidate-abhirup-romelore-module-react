
import { setSeederFactory } from 'typeorm-extension';

import { faker } from '@faker-js/faker';
import {Story} from "../entities/story.entity";

export default setSeederFactory(Story, () => {
    const story = new Story();
    story.author = faker.person.fullName();
    story.title = faker.lorem.sentence({min: 4, max: 10});
    story.content = faker.lorem.paragraph({min: 15, max: 20});
    story.excerpt = faker.lorem.sentences({min: 1, max: 3});
    story.image = faker.image.urlPicsumPhotos()

    return story;
});