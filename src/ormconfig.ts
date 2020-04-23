import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const config: any = dotenv.parse(fs.readFileSync('.env'));

const connection: ConnectionOptions = {
  type: config.DATABSE_TYPE,
  host: config.DATABASE_URL,
  port: parseInt(config.DATABSE_PORT),
  username: config.DATABSE_USER,
  password: config.DATABSE_PASSWORD,
  database: config.DATABSE_NAME,
  synchronize: config.DATABASE_SYNC,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/db/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}

export = connection;
