"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const crypto = require("crypto");
const upload_service_1 = require("./upload.service");
function createStorage(subfolder) {
    return (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadRoot = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
            const targetDir = path.join(uploadRoot, subfolder);
            cb(null, targetDir);
        },
        filename: (req, file, cb) => {
            const randomSuffix = crypto.randomBytes(8).toString('hex');
            const ext = path.extname(file.originalname).toLowerCase();
            const safeName = `${Date.now()}-${randomSuffix}${ext}`;
            cb(null, safeName);
        },
    });
}
const ALLOWED_IMAGE_MIMES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml',
];
const ALLOWED_DOCUMENT_MIMES = [
    'application/pdf',
];
const auth_guard_1 = require("../auth/guards/auth.guard");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    uploadImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se proporcionó ningún archivo de imagen.');
        }
        return {
            url: `/uploads/images/${file.filename}`,
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
        };
    }
    uploadDocument(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se proporcionó ningún archivo de documento.');
        }
        return {
            url: `/uploads/documents/${file.filename}`,
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
        };
    }
    uploadGeneric(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se envió ningún archivo.');
        }
        const isDoc = ALLOWED_DOCUMENT_MIMES.includes(file.mimetype);
        const subfolder = isDoc ? 'documents' : 'images';
        return {
            url: `/uploads/${subfolder}/${file.filename}`,
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
        };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: createStorage('images'),
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!ALLOWED_IMAGE_MIMES.includes(file.mimetype)) {
                return cb(new common_1.BadRequestException(`Tipo de archivo no permitido (${file.mimetype}). Solo se admiten imágenes: JPEG, PNG, WEBP, GIF, SVG.`), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('document'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: createStorage('documents'),
        limits: {
            fileSize: 25 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!ALLOWED_DOCUMENT_MIMES.includes(file.mimetype)) {
                return cb(new common_1.BadRequestException(`Tipo de archivo no permitido (${file.mimetype}). Solo se admiten documentos PDF.`), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadRoot = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
                const isDoc = ALLOWED_DOCUMENT_MIMES.includes(file.mimetype);
                const subfolder = isDoc ? 'documents' : 'images';
                cb(null, path.join(uploadRoot, subfolder));
            },
            filename: (req, file, cb) => {
                const randomSuffix = crypto.randomBytes(8).toString('hex');
                const ext = path.extname(file.originalname).toLowerCase();
                const safeName = `${Date.now()}-${randomSuffix}${ext}`;
                cb(null, safeName);
            },
        }),
        limits: {
            fileSize: 25 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            const isImage = ALLOWED_IMAGE_MIMES.includes(file.mimetype);
            const isDoc = ALLOWED_DOCUMENT_MIMES.includes(file.mimetype);
            if (!isImage && !isDoc) {
                return cb(new common_1.BadRequestException(`Formato no soportado (${file.mimetype}). Solo se permiten imágenes (JPG, PNG, WEBP, GIF, SVG) o documentos PDF.`), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadGeneric", null);
exports.UploadController = UploadController = __decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map