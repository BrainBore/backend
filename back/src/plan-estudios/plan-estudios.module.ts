import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PlanEstudiosController } from './plan-estudios.controller';
import { PlanEstudiosService } from './plan-estudios.service';

@Module({
  imports: [PrismaModule],
  controllers: [PlanEstudiosController],
  providers: [PlanEstudiosService],
  exports: [PlanEstudiosService],
})
export class PlanEstudiosModule {}
