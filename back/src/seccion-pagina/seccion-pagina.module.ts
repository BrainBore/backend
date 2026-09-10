import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SeccionPaginaController } from './seccion-pagina.controller';
import { SeccionPaginaService } from './seccion-pagina.service';

@Module({
  imports: [PrismaModule],
  controllers: [SeccionPaginaController],
  providers: [SeccionPaginaService],
})
export class SeccionPaginaModule {}