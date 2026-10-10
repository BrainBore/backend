import { Module } from '@nestjs/common';
import { BancoDatosController } from './banco-datos.controller';
import { BancoDatosService } from './banco-datos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BancoDatosController],
  providers: [BancoDatosService],
  exports: [BancoDatosService],
})
export class BancoDatosModule {}
