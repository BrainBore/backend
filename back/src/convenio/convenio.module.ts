import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ConvenioController } from './convenio.controller';
import { ConvenioService } from './convenio.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConvenioController],
  providers: [ConvenioService],
  exports: [ConvenioService],
})
export class ConvenioModule {}
