import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  const uploadDir = process.env.UPLOAD_DIR || join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Servir archivos estáticos bajo el prefijo /uploads/
  app.useStaticAssets(uploadDir, {
    prefix: '/uploads/',
  });

  // Servir imágenes públicas del portal bajo /images/ para previsualización en el admin
  const portalImagesDir = join(process.cwd(), '..', '..', 'Estadistica-Umsa-main', 'public', 'images');
  if (fs.existsSync(portalImagesDir)) {
    app.useStaticAssets(portalImagesDir, {
      prefix: '/images/',
    });
  }

  await app.listen(3000);
}
bootstrap();

