import {MigrationInterface, QueryRunner} from "typeorm";

export class User1553890019305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_pic_url"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_pic_url" character varying(255) NOT NULL`);
    }

}
