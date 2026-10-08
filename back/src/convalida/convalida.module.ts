import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ConvalidaController } from './convalida.controller';
import { ConvalidaService } from './convalida.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConvalidaController],
  providers: [ConvalidaService],
  exports: [ConvalidaService],
})
export class ConvalidaModule {}
