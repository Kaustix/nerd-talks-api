import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalksController } from './talks.controller';
import { TalksService } from './talks.service';
import { Talk } from './talk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talk])],
  controllers: [TalksController],
  providers: [TalksService],
  exports: [TypeOrmModule]
})
export class TalksModule{}
