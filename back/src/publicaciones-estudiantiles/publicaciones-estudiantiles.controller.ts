import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { PublicacionesEstudiantilesDto, PublicacionesEstudiantilesService } from './publicaciones-estudiantiles.service';

@Controller('publicaciones-estudiantiles')
export class PublicacionesEstudiantilesController {
  constructor(private readonly service: PublicacionesEstudiantilesService) {}

  @Public()
  @Get()
  findAll(
    @Query('area') area?: string,
    @Query('anio') anio?: number,
  ) {
    return this.service.findAll(area, anio);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: PublicacionesEstudiantilesDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<PublicacionesEstudiantilesDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
