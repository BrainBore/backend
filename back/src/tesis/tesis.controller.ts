import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { TesisDto, TesisService } from './tesis.service';

@Controller('tesis')
export class TesisController {
  constructor(private readonly service: TesisService) {}

  @Public()
  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('tipo') tipo?: string,
    @Query('area') area?: string,
  ) {
    return this.service.findAll(search, tipo, area);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: TesisDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<TesisDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
