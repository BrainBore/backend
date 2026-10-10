import { Module } from '@nestjs/common';
import { TesisController } from './tesis.controller';
import { TesisService } from './tesis.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TesisController],
  providers: [TesisService],
  exports: [TesisService],
})
export class TesisModule {}
