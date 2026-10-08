import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { ConvalidaDto, ConvalidaService } from './convalida.service';

@Controller('convalida')
export class ConvalidaController {
  constructor(private readonly convalidaService: ConvalidaService) {}

  @Public()
  @Get()
  findAll() {
    return this.convalidaService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.convalidaService.findOne(id);
  }

  @Post()
  create(@Body() data: ConvalidaDto) {
    return this.convalidaService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<ConvalidaDto>) {
    return this.convalidaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.convalidaService.remove(id);
  }
}
