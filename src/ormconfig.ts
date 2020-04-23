import { ConnectionOptions } from 'typeorm';
import { ConfigService } from './config.service';

const configService = new ConfigService();

const connection: ConnectionOptions = {
  type: configService.get<any>('DATABASE_TYPE'),
  url: configService.get<string>('DATABASE_URL'),
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
