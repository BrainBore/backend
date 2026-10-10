import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { BancoDatosDto, BancoDatosService } from './banco-datos.service';

@Controller('banco-datos')
export class BancoDatosController {
  constructor(private readonly service: BancoDatosService) {}

  @Public()
  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('tipo') tipo?: string,
  ) {
    return this.service.findAll(search, tipo);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: BancoDatosDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<BancoDatosDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
