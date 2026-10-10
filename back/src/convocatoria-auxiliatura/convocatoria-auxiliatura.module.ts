import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ConvocatoriaAuxiliaturaController } from './convocatoria-auxiliatura.controller';
import { ConvocatoriaAuxiliaturaService } from './convocatoria-auxiliatura.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConvocatoriaAuxiliaturaController],
  providers: [ConvocatoriaAuxiliaturaService],
  exports: [ConvocatoriaAuxiliaturaService],
})
export class ConvocatoriaAuxiliaturaModule {}
