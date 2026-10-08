import { OnModuleInit } from '@nestjs/common';
export declare class UploadService implements OnModuleInit {
    private readonly uploadDir;
    private readonly imagesDir;
    private readonly documentsDir;
    constructor();
    onModuleInit(): void;
    private ensureDirectoriesExist;
    getUploadDir(): string;
    getImagesDir(): string;
    getDocumentsDir(): string;
    deleteFile(relativeUrl: string): boolean;
}
