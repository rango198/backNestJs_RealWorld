import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFollows1718721679541 implements MigrationInterface {
    name = 'CreateFollows1718721679541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "follows" ("id" integer NOT NULL, "followerId" integer NOT NULL, "following" integer NOT NULL, CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "follows"`);
    }

}
