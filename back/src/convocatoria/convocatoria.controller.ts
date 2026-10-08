import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ConvocatoriaDto, ConvocatoriaService } from './convocatoria.service';

@Controller('convocatoria')
export class ConvocatoriaController {
  constructor(private readonly convocatoriaService: ConvocatoriaService) {}

  @Public()
  @Get()
  findAll() {
    return this.convocatoriaService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.convocatoriaService.findOne(id);
  }

  @Post()
  create(@Body() data: ConvocatoriaDto) {
    return this.convocatoriaService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ConvocatoriaDto>) {
    return this.convocatoriaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.convocatoriaService.remove(id);
  }
}
