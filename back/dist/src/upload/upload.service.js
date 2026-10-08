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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let UploadService = class UploadService {
    constructor() {
        this.uploadDir = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
        this.imagesDir = path.join(this.uploadDir, 'images');
        this.documentsDir = path.join(this.uploadDir, 'documents');
    }
    onModuleInit() {
        this.ensureDirectoriesExist();
    }
    ensureDirectoriesExist() {
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
    getUploadDir() {
        return this.uploadDir;
    }
    getImagesDir() {
        return this.imagesDir;
    }
    getDocumentsDir() {
        return this.documentsDir;
    }
    deleteFile(relativeUrl) {
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
        }
        catch (err) {
            console.error(`Error deleting file ${relativeUrl}:`, err);
        }
        return false;
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadService);
//# sourceMappingURL=upload.service.js.map