import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PublicacionesEstudiantilesController } from './publicaciones-estudiantiles.controller';
import { PublicacionesEstudiantilesService } from './publicaciones-estudiantiles.service';

@Module({
  imports: [PrismaModule],
  controllers: [PublicacionesEstudiantilesController],
  providers: [PublicacionesEstudiantilesService],
  exports: [PublicacionesEstudiantilesService],
})
export class PublicacionesEstudiantilesModule {}
