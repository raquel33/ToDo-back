import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './modules/tasks/tasks.module';


@Module({
  imports: [TasksModule, MongooseModule.forRoot('mongodb://localhost/toDoList')]
})
export class AppModule {}
