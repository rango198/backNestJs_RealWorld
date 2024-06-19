import { TagsService } from './tags.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tags')

export class TagsController {
  constructor(private readonly tagsService: TagsService) { }

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagsService.findAll()
    return {
      tags: tags.map((tag) => tag.name)
    }
  }
}
