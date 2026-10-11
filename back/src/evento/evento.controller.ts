import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { EventoDto, EventoService } from './evento.service';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Public()
  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.findOne(id);
  }

  @Post()
  create(@Body() data: EventoDto) {
    return this.eventoService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<EventoDto>) {
    return this.eventoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.remove(id);
  }
}