import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const config: any = dotenv.parse(fs.readFileSync('.env'));

const connection: ConnectionOptions = {
  type: config.DB_TYPE,
  host: config.DB_HOST,
  port: parseInt(config.DB_PORT),
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export = connection;
