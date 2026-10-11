import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { NoticiaDto, NoticiaService } from './noticia.service';

@Controller('noticia')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Public()
  @Get()
  findAll() {
    return this.noticiaService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.noticiaService.findOne(id);
  }

  @Post()
  create(@Body() data: NoticiaDto) {
    return this.noticiaService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<NoticiaDto>) {
    return this.noticiaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.noticiaService.remove(id);
  }
}