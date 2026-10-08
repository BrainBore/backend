import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { PlanEstudiosDto, PlanEstudiosService } from './plan-estudios.service';

@Controller('plan-estudios')
export class PlanEstudiosController {
  constructor(private readonly planEstudiosService: PlanEstudiosService) {}

  @Public()
  @Get()
  findAll() {
    return this.planEstudiosService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.planEstudiosService.findOne(id);
  }

  @Post()
  create(@Body() data: PlanEstudiosDto) {
    return this.planEstudiosService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<PlanEstudiosDto>) {
    return this.planEstudiosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.planEstudiosService.remove(id);
  }
}
