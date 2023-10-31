import { MigrationInterface, QueryRunner } from "typeorm"
import { User } from "../../modules/accounts/entities/UserModel";
import bcrypt from "bcrypt";

export class UserSeed1698779445684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(queryRunner.manager.create<User>(User,{name: 'admin', username: 'admin' ,password: await bcrypt.hash('admin', 8), email: 'admin@email.com', driver_license: '123', isAdmin: true}));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
