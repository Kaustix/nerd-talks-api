import {MigrationInterface, QueryRunner} from "typeorm";

export class createTalks1587683633493 implements MigrationInterface {
    name = 'createTalks1587683633493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "talk" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "presenter" character varying NOT NULL, "description" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_645e0089c9f92048125eef3d8eb" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "talk"`, undefined);
    }

}
