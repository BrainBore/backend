import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File): {
        url: string;
        filename: string;
        originalName: string;
        size: number;
        mimetype: string;
    };
    uploadDocument(file: Express.Multer.File): {
        url: string;
        filename: string;
        originalName: string;
        size: number;
        mimetype: string;
    };
    uploadGeneric(file: Express.Multer.File): {
        url: string;
        filename: string;
        originalName: string;
        size: number;
        mimetype: string;
    };
}
