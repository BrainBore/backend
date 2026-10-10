import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { DocumentoDigitalDto, DocumentoDigitalService } from './documento-digital.service';

@Controller('documento-digital')
export class DocumentoDigitalController {
  constructor(private readonly service: DocumentoDigitalService) {}

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
  create(@Body() data: DocumentoDigitalDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<DocumentoDigitalDto>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
