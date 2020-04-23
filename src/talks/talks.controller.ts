import { Controller, Get, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { TalksService } from './talks.service';
import { CreateTalkDto } from './dto/create-talk.dto';
import { Talk } from './talk.entity';

@Controller('talks')
export class TalksController {
  constructor(private readonly talksService: TalksService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getAll(): Promise<Array<Talk>> {
    return await this.talksService.getTalks();
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createTalkDto: CreateTalkDto): Promise<Talk> {
    const talk = new Talk(createTalkDto);
    return await this.talksService.create(talk);
  }
}
