import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ModuloDto, ModuloService } from './modulo.service';

@Controller('modulo')
export class ModuloController {
  constructor(private readonly moduloService: ModuloService) {}

  @Public()
  @Get()
  findAll(@Query('programaId') programaId?: string) {
    const id = programaId ? parseInt(programaId, 10) : undefined;
    return this.moduloService.findAll(id);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.moduloService.findOne(id);
  }

  @Post()
  create(@Body() data: ModuloDto) {
    return this.moduloService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ModuloDto>) {
    return this.moduloService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.moduloService.remove(id);
  }
}
