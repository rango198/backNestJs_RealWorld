import { Injectable } from '@nestjs/common';
import { TagsEntity } from './tags.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagsEntity)
    private readonly tagsRepository: Repository<TagsEntity>) { }

  async findAll(): Promise<TagsEntity[]> {
    return await this.tagsRepository.find();
  }
}
