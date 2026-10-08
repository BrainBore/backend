import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ProgramaDto, ProgramaService } from './programa.service';

@Controller('programa')
export class ProgramaController {
  constructor(private readonly programaService: ProgramaService) {}

  @Public()
  @Get()
  findAll(@Query('tipo') tipo?: string) {
    return this.programaService.findAll(tipo);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.programaService.findOne(id);
  }

  @Post()
  create(@Body() data: ProgramaDto) {
    return this.programaService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ProgramaDto>) {
    return this.programaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.programaService.remove(id);
  }
}
