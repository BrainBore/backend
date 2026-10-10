import { Module } from '@nestjs/common';
import { DocumentoDigitalController } from './documento-digital.controller';
import { DocumentoDigitalService } from './documento-digital.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DocumentoDigitalController],
  providers: [DocumentoDigitalService],
  exports: [DocumentoDigitalService],
})
export class DocumentoDigitalModule {}
