import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
  imports: [PrismaModule],
})
export class ReservationsModule {}
