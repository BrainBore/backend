import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ModuloController } from './modulo.controller';
import { ModuloService } from './modulo.service';

@Module({
  imports: [PrismaModule],
  controllers: [ModuloController],
  providers: [ModuloService],
  exports: [ModuloService],
})
export class ModuloModule {}
