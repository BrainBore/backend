import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { PasantiaDto, PasantiaService } from './pasantia.service';

@Controller('pasantia')
export class PasantiaController {
  constructor(private readonly service: PasantiaService) {}

  @Public()
  @Get()
  findAll(
    @Query('area') area?: string,
    @Query('tipo') tipo?: string,
  ) {
    return this.service.findAll(area, tipo);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: PasantiaDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<PasantiaDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
