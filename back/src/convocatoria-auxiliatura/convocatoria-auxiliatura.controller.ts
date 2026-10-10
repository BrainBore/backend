import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ConvocatoriaAuxiliaturaDto, ConvocatoriaAuxiliaturaService } from './convocatoria-auxiliatura.service';

@Controller('convocatoria-auxiliatura')
export class ConvocatoriaAuxiliaturaController {
  constructor(private readonly service: ConvocatoriaAuxiliaturaService) {}

  @Public()
  @Get()
  findAll(
    @Query('estado') estado?: string,
    @Query('tipo') tipo?: string,
  ) {
    return this.service.findAll(estado, tipo);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: ConvocatoriaAuxiliaturaDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ConvocatoriaAuxiliaturaDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
