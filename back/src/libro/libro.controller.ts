import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { LibroDto, LibroService } from './libro.service';

@Controller('libro')
export class LibroController {
  constructor(private readonly service: LibroService) {}

  @Public()
  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('idAutor') idAutor?: string,
  ) {
    return this.service.findAll(search, idAutor ? parseInt(idAutor, 10) : undefined);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: LibroDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<LibroDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
