import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1752037570848 implements MigrationInterface {
    name = 'Migration1752037570848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "story" ADD "category" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "story" DROP COLUMN "category"`);
    }

}
