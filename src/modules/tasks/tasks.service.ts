import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskDocument } from './entities/task.entity';

@Injectable()
export class TasksService {
    constructor(
      @InjectModel('Task') 
      private readonly taskModel: Model<TaskDocument>
    ){}

  async findAll(){
    return await this.taskModel.find();
  }

  async findById(id: string) {
    let filterOptions = {_id: id };
    const task = await this.taskModel.findOne(filterOptions);
    if (!task) throw new NotFoundException("Task doesn't exist");
    return task;
  }

  async create(createTaskDto: CreateTaskDto) {
    let filterOptions = {name: createTaskDto.name};
    const exist = await this.taskModel.findOne(filterOptions);
    if (!!exist) throw new NotFoundException("A task with the same name already exists");
    return await this.taskModel.create(createTaskDto);
  }

  async update(id: string, fields: UpdateTaskDto) {
    let filterOptions = {_id: id };
    const task = await this.taskModel.findOne(filterOptions);
    if (!task) throw new NotFoundException("Task doesn't exist");
    Object.assign(task, fields);
    task.save();
    return task;
  }

  async remove(id: string) {
    let filterOptions = {_id: id };
    const task = await this.taskModel.findOne(filterOptions);
    if (!task) throw new NotFoundException("Task doesn't exist");
    return await this.taskModel.remove(filterOptions);
  }
}