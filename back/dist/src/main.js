"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const uploadDir = process.env.UPLOAD_DIR || (0, path_1.join)(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }
    app.useStaticAssets(uploadDir, {
        prefix: '/uploads/',
    });
    const portalImagesDir = (0, path_1.join)(process.cwd(), '..', '..', 'Estadistica-Umsa-main', 'public', 'images');
    if (fs.existsSync(portalImagesDir)) {
        app.useStaticAssets(portalImagesDir, {
            prefix: '/images/',
        });
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map