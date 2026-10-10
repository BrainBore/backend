import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { DatosArchivoDto, DatosArchivoService } from './datos-archivo.service';

@Controller('datos-archivo')
export class DatosArchivoController {
  constructor(private readonly service: DatosArchivoService) {}

  @Public()
  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('idBancoDatos') idBancoDatos?: string,
  ) {
    return this.service.findAll(search, idBancoDatos ? parseInt(idBancoDatos, 10) : undefined);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: DatosArchivoDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DatosArchivoDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
