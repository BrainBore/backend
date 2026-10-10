import { Module } from '@nestjs/common';
import { RevistaController } from './revista.controller';
import { RevistaService } from './revista.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RevistaController],
  providers: [RevistaService],
  exports: [RevistaService],
})
export class RevistaModule {}
