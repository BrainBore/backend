import { Injectable, OnModuleInit, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService implements OnModuleInit {
  private readonly uploadDir: string;
  private readonly imagesDir: string;
  private readonly documentsDir: string;

  constructor() {
    this.uploadDir = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
    this.imagesDir = path.join(this.uploadDir, 'images');
    this.documentsDir = path.join(this.uploadDir, 'documents');
  }

  onModuleInit() {
    this.ensureDirectoriesExist();
  }

  private ensureDirectoriesExist() {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
    if (!fs.existsSync(this.imagesDir)) {
      fs.mkdirSync(this.imagesDir, { recursive: true });
    }
    if (!fs.existsSync(this.documentsDir)) {
      fs.mkdirSync(this.documentsDir, { recursive: true });
    }
  }

  getUploadDir(): string {
    return this.uploadDir;
  }

  getImagesDir(): string {
    return this.imagesDir;
  }

  getDocumentsDir(): string {
    return this.documentsDir;
  }

  deleteFile(relativeUrl: string): boolean {
    if (!relativeUrl || !relativeUrl.startsWith('/uploads/')) {
      return false;
    }

    try {
      const sanitized = relativeUrl.replace('/uploads/', '').replace(/\.\./g, '');
      const absolutePath = path.join(this.uploadDir, sanitized);

      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
        return true;
      }
    } catch (err) {
      console.error(`Error deleting file ${relativeUrl}:`, err);
    }
    return false;
  }
}
