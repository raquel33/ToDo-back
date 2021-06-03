import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import {
  ApiFindOneParams,
  FindOneParams,
} from '../../shared/decorators/api-find-one.params';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('Tasks')
@Controller('/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
    @ApiOperation({
        summary: 'Create a new task',
        description:
          'This response will include the created task information',
    })
    @ApiOkResponse({ type: Task })
    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return await this.tasksService.create(createTaskDto);
    }


    @ApiOperation({
        summary: 'List all tasks',
        description: 'This response will include all tasks information',
    })
    @ApiOkResponse({ type: Task, isArray: true })
    @Get()
    async findAll() {
        return await this.tasksService.findAll();
    }


    @ApiOperation({
        summary: 'Get task by id',
        description: 'This response will include the task information',
      })
    @ApiOkResponse({ type: Task })
    @ApiFindOneParams()
    @Get(':id')
    async findById(@Param(){ id }: FindOneParams) {
        return await this.tasksService.findById(id);
    }


    @ApiOperation({
      summary: 'Edit a  task',
      description:
        'This response will include the edited task information',
    })
    @ApiOkResponse({ type: Task })
    @ApiFindOneParams()
    @Put(':id')
    async update(@Param() { id }: FindOneParams,@Body() updateTaskDto: UpdateTaskDto) {
      return await this.tasksService.update(id, updateTaskDto);
    }

    @ApiOperation({
      summary: 'Delete a task',
      description:
        'This response will include the removed task information',
    })
    @ApiOkResponse({ type: Task })
    @ApiFindOneParams()
    @Delete(':id')
    async remove(@Param() { id }: FindOneParams) {
      return await this.tasksService.remove(id);
    }

}

