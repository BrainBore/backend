import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { PlantelService, PlantelTipo } from './plantel.service';

@Controller('plantel')
export class PlantelController {
  constructor(private readonly plantelService: PlantelService) {}

  @Public()
  @Get(':tipo')
  findAll(@Param('tipo') tipo: PlantelTipo) {
    return this.plantelService.findAll(tipo);
  }

  @Post(':tipo')
  create(@Param('tipo') tipo: PlantelTipo, @Body() data: Record<string, string>) {
    return this.plantelService.create(tipo, data);
  }

  @Patch(':tipo/:id')
  update(
    @Param('tipo') tipo: PlantelTipo,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Record<string, string>,
  ) {
    return this.plantelService.update(tipo, id, data);
  }

  @Delete(':tipo/:id')
  remove(@Param('tipo') tipo: PlantelTipo, @Param('id', ParseIntPipe) id: number) {
    return this.plantelService.remove(tipo, id);
  }
}