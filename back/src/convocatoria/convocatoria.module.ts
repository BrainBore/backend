import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ConvocatoriaController } from './convocatoria.controller';
import { ConvocatoriaService } from './convocatoria.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConvocatoriaController],
  providers: [ConvocatoriaService],
  exports: [ConvocatoriaService],
})
export class ConvocatoriaModule {}
