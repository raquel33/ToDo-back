import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEnum } from 'class-validator';
import { Document, Types } from 'mongoose';
import { TaskPriority } from '../tasks-priority';

export type TaskDocument = Task & Document;
@Schema({ timestamps: true })
export class Task {
  @ApiProperty({ type: 'string', format: 'string' })
  _id: string;

  @ApiProperty({ type: 'string', format: 'string' })
  @IsString()
  @IsNotEmpty()
  @Prop({ unique: true })
  name: string;

  @ApiProperty({ type: 'string', format: 'string' })
  @IsString()
  @IsNotEmpty()
  @Prop()
  description: string;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'enum',
      enum: Object.keys(TaskPriority),
    },
  })
  @IsEnum(TaskPriority, {
    each: true,
    message: `Must be a valid priority value ${Object.keys(TaskPriority)}`,
  })
  @Prop()
  priority?: string;

}

const TaskSchema = SchemaFactory.createForClass(Task);
export default TaskSchema;
