import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getAll(): Promise<Array<Event>> {
    return await this.eventService.getPastEvents();
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
    const event = new Event(createEventDto);
    return await this.eventService.create(event);
  }
}
