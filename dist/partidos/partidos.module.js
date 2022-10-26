"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartidosModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const partidos_controller_1 = require("./partidos.controller");
const partidos_service_1 = require("./partidos.service");
const common_2 = require("@nestjs/common");
let PartidosModule = class PartidosModule {
};
PartidosModule = __decorate([
    (0, common_1.Module)({
        imports: [common_2.CacheModule.register()],
        providers: [partidos_service_1.PartidosService, prisma_service_1.PrismaService],
        exports: [partidos_service_1.PartidosService],
        controllers: [partidos_controller_1.PartidosController],
    })
], PartidosModule);
exports.PartidosModule = PartidosModule;
//# sourceMappingURL=partidos.module.js.map