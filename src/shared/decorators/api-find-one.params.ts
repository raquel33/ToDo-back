import { ApiParam } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, } from 'class-validator';

export class FindOneParams {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}

export function ApiFindOneParams() {
  return ApiParam({ name: 'id', type: 'string', required: true });
}
