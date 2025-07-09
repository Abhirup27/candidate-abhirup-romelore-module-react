import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1751994966027 implements MigrationInterface {
    name = 'Migration1751994966027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "story" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "author" character varying NOT NULL, "excerpt" character varying, "content" text NOT NULL, "image" text, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_28fce6873d61e2cace70a0f3361" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "story"`);
    }

}
