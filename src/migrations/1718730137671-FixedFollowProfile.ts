import { MigrationInterface, QueryRunner } from "typeorm";

export class FixedFollowProfile1718730137671 implements MigrationInterface {
    name = 'FixedFollowProfile1718730137671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "follows_id_seq" OWNED BY "follows"."id"`);
        await queryRunner.query(`ALTER TABLE "follows" ALTER COLUMN "id" SET DEFAULT nextval('"follows_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follows" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "follows_id_seq"`);
    }

}
