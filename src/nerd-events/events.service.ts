import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>
  ) {}

  async create(event: Event): Promise<Event> {
    return await this.eventRepository.save(event);
  }

  async getPastEvents(): Promise<Event[]> {
    return await this.eventRepository.find();
  }
}
