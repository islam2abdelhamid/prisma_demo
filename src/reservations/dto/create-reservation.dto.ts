import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  restaurantId: number;

  @ApiProperty()
  tableId: number;
}
