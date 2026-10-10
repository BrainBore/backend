import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MatrizCientificaController } from './matriz-cientifica.controller';
import { MatrizCientificaService } from './matriz-cientifica.service';

@Module({
  imports: [PrismaModule],
  controllers: [MatrizCientificaController],
  providers: [MatrizCientificaService],
  exports: [MatrizCientificaService],
})
export class MatrizCientificaModule {}
