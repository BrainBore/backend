import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MateriaPregradoController } from './materia-pregrado.controller';
import { MateriaPregradoService } from './materia-pregrado.service';

@Module({
  imports: [PrismaModule],
  controllers: [MateriaPregradoController],
  providers: [MateriaPregradoService],
  exports: [MateriaPregradoService],
})
export class MateriaPregradoModule {}
