import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  create(createReservationDto: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: {
        ...createReservationDto,
        date: new Date(createReservationDto.date),
      },
    });
  }

  getAvailableTables(date: Date) {
    return this.prisma.reservation.findMany({
      where: {
        date: {
          equals: date,
        },
      },
    });
  }

  findAll() {
    return this.prisma.reservation.findMany({
      include: {
        restaurant: true,
        table: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
