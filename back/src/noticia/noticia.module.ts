import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';

@Module({
  imports: [PrismaModule],
  controllers: [NoticiaController],
  providers: [NoticiaService],
  exports: [NoticiaService],
})
export class NoticiaModule {}