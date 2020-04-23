import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TalksModule } from './talks/talks.module';
import { ConfigService } from './config.service';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TalksModule,
  ],
  controllers: [AppController],
  providers: [ConfigService]
})
export class AppModule {
}
