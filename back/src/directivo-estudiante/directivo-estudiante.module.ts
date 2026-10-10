import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DirectivoEstudianteController } from './directivo-estudiante.controller';
import { DirectivoEstudianteService } from './directivo-estudiante.service';

@Module({
  imports: [PrismaModule],
  controllers: [DirectivoEstudianteController],
  providers: [DirectivoEstudianteService],
  exports: [DirectivoEstudianteService],
})
export class DirectivoEstudianteModule {}
