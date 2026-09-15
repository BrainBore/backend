import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PlantelController } from './plantel.controller';
import { PlantelService } from './plantel.service';

@Module({
  imports: [PrismaModule],
  controllers: [PlantelController],
  providers: [PlantelService],
})
export class PlantelModule {}