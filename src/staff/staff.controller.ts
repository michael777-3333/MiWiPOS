import { Body, Controller, Get, Post } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { Staff } from './staff.entity';

@Controller('staff')
export class StaffController {
  constructor(private staffService: StaffService) {}

  @Post()
  createStaff(@Body() newStaff: CreateStaffDto) {
    return this.staffService.createStaff(newStaff);
  }

  @Get()
  getStaffs(): Promise<Staff[]> {
    return this.staffService.getStaffs();
  }
}
