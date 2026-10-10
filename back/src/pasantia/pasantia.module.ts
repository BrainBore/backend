import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PasantiaController } from './pasantia.controller';
import { PasantiaService } from './pasantia.service';

@Module({
  imports: [PrismaModule],
  controllers: [PasantiaController],
  providers: [PasantiaService],
  exports: [PasantiaService],
})
export class PasantiaModule {}
