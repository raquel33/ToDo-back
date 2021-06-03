import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { TaskPriority } from '../tasks-priority';

export class CreateTaskDto {
  @ApiProperty({ type: 'string', format: 'string' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string', format: 'string' })
  @IsString()
  @IsNotEmpty()
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
  priority?: string;

}
