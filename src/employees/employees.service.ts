import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createEmployeeDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: createEmployeeDto });
  }

  async findAll(role?: 'intern' | 'dev' | 'admin') {
    if (role)
      return this.prismaService.user.findMany({
        where: {
          role,
        },
      });

    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async update(id: string, updateEmployeeDto: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
