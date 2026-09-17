import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ConvenioDto, ConvenioService } from './convenio.service';

@Controller('convenio')
export class ConvenioController {
  constructor(private readonly convenioService: ConvenioService) {}

  @Public()
  @Get()
  findAll() {
    return this.convenioService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.convenioService.findOne(id);
  }

  @Post()
  create(@Body() data: ConvenioDto) {
    return this.convenioService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ConvenioDto>) {
    return this.convenioService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.convenioService.remove(id);
  }
}
