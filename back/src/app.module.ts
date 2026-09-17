import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlantelModule } from './plantel/plantel.module';
import { EstudianteAutoridadModule } from './estudiante-autoridad/estudiante-autoridad.module';
import { SeccionPaginaModule } from './seccion-pagina/seccion-pagina.module';
import { UsersModule } from './users/users.module';
import { ConvenioModule } from './convenio/convenio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    PlantelModule,
    EstudianteAutoridadModule,
    SeccionPaginaModule,
    UsersModule,
    ConvenioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}