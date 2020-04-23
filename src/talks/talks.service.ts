import { Injectable } from '@nestjs/common';
import { Talk } from './talk.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TalksService {
  constructor(
    @InjectRepository(Talk) private talkRepository: Repository<Talk>
  ) {}

  async getTalks(): Promise<Talk[]> {
    return await this.talkRepository.find();
  }

  async create(talk: Talk): Promise<Talk> {
    return await this.talkRepository.save(talk);
  }
}
