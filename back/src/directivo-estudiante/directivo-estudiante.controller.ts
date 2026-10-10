import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { DirectivoEstudianteDto, DirectivoEstudianteService } from './directivo-estudiante.service';

@Controller('directivo-estudiante')
export class DirectivoEstudianteController {
  constructor(private readonly service: DirectivoEstudianteService) {}

  @Public()
  @Get()
  findAll(@Query('area') area?: string) {
    return this.service.findAll(area);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: DirectivoEstudianteDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DirectivoEstudianteDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
