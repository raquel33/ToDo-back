import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TaskSchema from './entities/task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
