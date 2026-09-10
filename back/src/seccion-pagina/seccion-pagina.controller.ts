import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import {
  SeccionPaginaData,
  SeccionPaginaService,
} from './seccion-pagina.service';
import { Public } from '../auth/guards/auth.guard';

@Controller('seccion-pagina')
export class SeccionPaginaController {
  constructor(private readonly seccionPaginaService: SeccionPaginaService) {}

  @Public()
  @Get()
  findAll() {
    return this.seccionPaginaService.findAll();
  }

  @Public()
  @Get(':claveCampo')
  findOne(@Param('claveCampo') claveCampo: string) {
    return this.seccionPaginaService.findOne(claveCampo);
  }

  @Put(':claveCampo')
  update(
    @Param('claveCampo') claveCampo: string,
    @Body() data: Partial<Omit<SeccionPaginaData, 'claveCampo'>>,
  ) {
    return this.seccionPaginaService.update(claveCampo, data);
  }

  @Patch(':claveCampo')
  patch(
    @Param('claveCampo') claveCampo: string,
    @Body() data: Partial<Omit<SeccionPaginaData, 'claveCampo'>>,
  ) {
    return this.seccionPaginaService.update(claveCampo, data);
  }
}