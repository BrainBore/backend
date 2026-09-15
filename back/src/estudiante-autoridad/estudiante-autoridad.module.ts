import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EstudianteAutoridadController } from './estudiante-autoridad.controller';
import { EstudianteAutoridadService } from './estudiante-autoridad.service';

@Module({
  imports: [PrismaModule],
  controllers: [EstudianteAutoridadController],
  providers: [EstudianteAutoridadService],
})
export class EstudianteAutoridadModule {}