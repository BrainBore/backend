"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = require("@prisma/client/runtime/client");
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id       String @id @default(uuid())\n  email    String @unique\n  password String\n}\n\nmodel SeccionPagina {\n  claveCampo String @id @map(\"clave_campo\") @db.VarChar(255)\n  paginaSlug String @map(\"pagina_slug\") @db.VarChar(255)\n  valor      String @db.VarChar(255)\n  tipo       String @db.VarChar(255)\n\n  @@map(\"seccion_pagina\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"SeccionPagina\":{\"fields\":[{\"name\":\"claveCampo\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"clave_campo\"},{\"name\":\"paginaSlug\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"pagina_slug\"},{\"name\":\"valor\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tipo\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":\"seccion_pagina\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"SeccionPagina.findUnique\",\"SeccionPagina.findUniqueOrThrow\",\"SeccionPagina.findFirst\",\"SeccionPagina.findFirstOrThrow\",\"SeccionPagina.findMany\",\"SeccionPagina.createOne\",\"SeccionPagina.createMany\",\"SeccionPagina.createManyAndReturn\",\"SeccionPagina.updateOne\",\"SeccionPagina.updateMany\",\"SeccionPagina.updateManyAndReturn\",\"SeccionPagina.upsertOne\",\"SeccionPagina.deleteOne\",\"SeccionPagina.deleteMany\",\"SeccionPagina.groupBy\",\"SeccionPagina.aggregate\",\"AND\",\"OR\",\"NOT\",\"claveCampo\",\"paginaSlug\",\"valor\",\"tipo\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"id\",\"email\",\"password\",\"set\"]"),
    graph: "QhEgBioAADsAMCsAAAQAECwAADsAMDwBAAAAAT0BAAAAAT4BADkAIQEAAAABACABAAAAAQAgBioAADsAMCsAAAQAECwAADsAMDwBADkAIT0BADkAIT4BADkAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACADPAEAAAABPQEAAAABPgEAAAABAQgAAAkAIAM8AQAAAAE9AQAAAAE-AQAAAAEBCAAACwAwAQgAAAsAMAM8AQA_ACE9AQA_ACE-AQA_ACECAAAAAQAgCAAADgAgAzwBAD8AIT0BAD8AIT4BAD8AIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgAxUAAEAAIBYAAEIAIBcAAEEAIAYqAAA6ADArAAAXABAsAAA6ADA8AQA0ACE9AQA0ACE-AQA0ACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAcqAAA4ADArAAAdABAsAAA4ADAtAQAAAAEuAQA5ACEvAQA5ACEwAQA5ACEBAAAAGgAgAQAAABoAIAcqAAA4ADArAAAdABAsAAA4ADAtAQA5ACEuAQA5ACEvAQA5ACEwAQA5ACEAAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgBC0BAAAAAS4BAAAAAS8BAAAAATABAAAAAQEIAAAiACAELQEAAAABLgEAAAABLwEAAAABMAEAAAABAQgAACQAMAEIAAAkADAELQEAPwAhLgEAPwAhLwEAPwAhMAEAPwAhAgAAABoAIAgAACcAIAQtAQA_ACEuAQA_ACEvAQA_ACEwAQA_ACECAAAAHQAgCAAAKQAgAgAAAB0AIAgAACkAIAMAAAAaACAPAAAiACAQAAAnACABAAAAGgAgAQAAAB0AIAMVAAA8ACAWAAA-ACAXAAA9ACAHKgAAMwAwKwAAMAAQLAAAMwAwLQEANAAhLgEANAAhLwEANAAhMAEANAAhAwAAAB0AIAMAAC8AMBQAADAAIAMAAAAdACADAAAeADAEAAAaACAHKgAAMwAwKwAAMAAQLAAAMwAwLQEANAAhLgEANAAhLwEANAAhMAEANAAhDhUAADYAIBYAADcAIBcAADcAIDEBAAAAATIBAAAABDMBAAAABDQBAAAAATUBAAAAATYBAAAAATcBAAAAATgBAAAAATkBAAAAAToBAAAAATsBADUAIQ4VAAA2ACAWAAA3ACAXAAA3ACAxAQAAAAEyAQAAAAQzAQAAAAQ0AQAAAAE1AQAAAAE2AQAAAAE3AQAAAAE4AQAAAAE5AQAAAAE6AQAAAAE7AQA1ACEIMQIAAAABMgIAAAAEMwIAAAAENAIAAAABNQIAAAABNgIAAAABNwIAAAABOwIANgAhCzEBAAAAATIBAAAABDMBAAAABDQBAAAAATUBAAAAATYBAAAAATcBAAAAATgBAAAAATkBAAAAAToBAAAAATsBADcAIQcqAAA4ADArAAAdABAsAAA4ADAtAQA5ACEuAQA5ACEvAQA5ACEwAQA5ACELMQEAAAABMgEAAAAEMwEAAAAENAEAAAABNQEAAAABNgEAAAABNwEAAAABOAEAAAABOQEAAAABOgEAAAABOwEANwAhBioAADoAMCsAABcAECwAADoAMDwBADQAIT0BADQAIT4BADQAIQYqAAA7ADArAAAEABAsAAA7ADA8AQA5ACE9AQA5ACE-AQA5ACEAAAABPwEAAAABAAAAAAAAAAMVAAYWAAcXAAgAAAADFQAGFgAHFwAIAAAAAxUADhYADxcAEAAAAAMVAA4WAA8XABABAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIYGAUZGQkaGwobHAocHwodIAoeIQofIwogJQIhJgsiKAojKgIkKwwlLAomLQonLgIoMQ0pMhE"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => require('node:buffer'));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js")),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js"));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map