import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProgramaController } from './programa.controller';
import { ProgramaService } from './programa.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProgramaController],
  providers: [ProgramaService],
  exports: [ProgramaService],
})
export class ProgramaModule {}
