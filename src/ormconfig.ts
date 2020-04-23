import { ConnectionOptions } from 'typeorm';
import { ConfigService } from './config.service';

const configService = new ConfigService();

const connection: ConnectionOptions = {
  type: configService.get<any>('DATABASE_TYPE'),
  host:  configService.get<string>('DATABASE_HOST'),
  port:  configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/db/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations'
  }
}

export = connection;
