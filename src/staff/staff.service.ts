import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff) private staffRepository: Repository<Staff>,
  ) {}

  async createStaff(staff: CreateStaffDto) {
    const staffFound = await this.staffRepository.findOne({
      where: {
        no_identificacion: staff.no_identificacion,
      },
    });
    if (staffFound) {
      return new HttpException('Staff alredy exist', HttpStatus.CONFLICT);
    }
    const newStaff = this.staffRepository.create(staff);
    return this.staffRepository.save(newStaff);
  }

  getStaffs() {
    return this.staffRepository.find();
  }
}
