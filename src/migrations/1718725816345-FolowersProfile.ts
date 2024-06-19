import { MigrationInterface, QueryRunner } from "typeorm";

export class FolowersProfile1718725816345 implements MigrationInterface {
    name = 'FolowersProfile1718725816345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" RENAME COLUMN "following" TO "followingId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" RENAME COLUMN "followingId" TO "following"`);
    }

}
