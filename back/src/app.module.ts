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
import { PlanEstudiosModule } from './plan-estudios/plan-estudios.module';
import { MateriaPregradoModule } from './materia-pregrado/materia-pregrado.module';
import { ConvalidaModule } from './convalida/convalida.module';
import { ConvocatoriaModule } from './convocatoria/convocatoria.module';
import { ProgramaModule } from './programa/programa.module';
import { ModuloModule } from './modulo/modulo.module';
import { UploadModule } from './upload/upload.module';

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
    PlanEstudiosModule,
    MateriaPregradoModule,
    ConvalidaModule,
    ConvocatoriaModule,
    ProgramaModule,
    ModuloModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}