import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Public } from '../auth/guards/auth.guard';
import { MateriaPregradoDto, MateriaPregradoService } from './materia-pregrado.service';

@Controller('materia-pregrado')
export class MateriaPregradoController {
  constructor(private readonly materiaService: MateriaPregradoService) {}

  @Public()
  @Get()
  findAll(
    @Query('planId') planId?: string,
    @Query('semestre') semestre?: string,
  ) {
    const parsedPlanId = planId ? parseInt(planId, 10) : undefined;
    const parsedSemestre = semestre ? parseInt(semestre, 10) : undefined;
    return this.materiaService.findAll(parsedPlanId, parsedSemestre);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.findOne(id);
  }

  @Post()
  create(@Body() data: MateriaPregradoDto) {
    return this.materiaService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<MateriaPregradoDto>,
  ) {
    return this.materiaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.remove(id);
  }

  @Post(':id/plan/:planId')
  assignPlan(
    @Param('id', ParseIntPipe) id: number,
    @Param('planId', ParseIntPipe) planId: number,
  ) {
    return this.materiaService.assignPlan(id, planId);
  }

  @Delete(':id/plan/:planId')
  unassignPlan(
    @Param('id', ParseIntPipe) id: number,
    @Param('planId', ParseIntPipe) planId: number,
  ) {
    return this.materiaService.unassignPlan(id, planId);
  }
}
