import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsernameToUses1718051252566 implements MigrationInterface {
    name = 'AddUsernameToUses1718051252566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
