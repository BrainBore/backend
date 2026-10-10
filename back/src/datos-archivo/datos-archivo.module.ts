import { Module } from '@nestjs/common';
import { DatosArchivoController } from './datos-archivo.controller';
import { DatosArchivoService } from './datos-archivo.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DatosArchivoController],
  providers: [DatosArchivoService],
  exports: [DatosArchivoService],
})
export class DatosArchivoModule {}
