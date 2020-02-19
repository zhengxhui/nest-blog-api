import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './dto';
import { InjectModel } from 'nestjs-typegoose';
import { PostSchema } from './posts.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(@InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>){}

  @Get()
  @ApiOperation({summary: '帖子列表'})
  async index() {
    return await this.PostModel.find()
  }

  @Post()
  @ApiOperation({summary: '创建帖子'})
  async create(@Body() createPostDto: CreatePostDto) {
    await this.PostModel.create(createPostDto)
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({summary: '帖子详情'})
  async detail(@Param('id') id:string) {
    return await this.PostModel.findById(id)
  }

  @Put(':id')
  @ApiOperation({summary: '编辑帖子'})
  async update(@Param('id') id:string, @Body() updatePostDto: CreatePostDto) {
    await this.PostModel.findByIdAndUpdate(id, updatePostDto)
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({summary: '删除帖子'})
  async remove(@Param('id') id:string) {
    await this.PostModel.findByIdAndDelete(id)
    return {
      success: true
    }
  }
}
