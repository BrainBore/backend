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
import { DirectivoEstudianteModule } from './directivo-estudiante/directivo-estudiante.module';
import { ConvocatoriaAuxiliaturaModule } from './convocatoria-auxiliatura/convocatoria-auxiliatura.module';
import { PasantiaModule } from './pasantia/pasantia.module';
import { PublicacionesEstudiantilesModule } from './publicaciones-estudiantiles/publicaciones-estudiantiles.module';
import { MatrizCientificaModule } from './matriz-cientifica/matriz-cientifica.module';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';
import { RevistaModule } from './revista/revista.module';
import { DocumentoDigitalModule } from './documento-digital/documento-digital.module';
import { TesisModule } from './tesis/tesis.module';
import { BancoDatosModule } from './banco-datos/banco-datos.module';
import { DatosArchivoModule } from './datos-archivo/datos-archivo.module';

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
    DirectivoEstudianteModule,
    ConvocatoriaAuxiliaturaModule,
    PasantiaModule,
    PublicacionesEstudiantilesModule,
    MatrizCientificaModule,
    AutorModule,
    LibroModule,
    RevistaModule,
    DocumentoDigitalModule,
    TesisModule,
    BancoDatosModule,
    DatosArchivoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}