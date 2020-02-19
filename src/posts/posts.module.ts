import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostSchema } from './posts.model';

@Module({
  imports: [TypegooseModule.forFeature([PostSchema])],
  controllers: [PostsController]
})
export class PostsModule {}
