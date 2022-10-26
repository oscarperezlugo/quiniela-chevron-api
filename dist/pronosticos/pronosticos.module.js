"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticosModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pronosticos_controller_1 = require("./pronosticos.controller");
const pronosticos_service_1 = require("./pronosticos.service");
const common_2 = require("@nestjs/common");
let PronosticosModule = class PronosticosModule {
};
PronosticosModule = __decorate([
    (0, common_1.Module)({
        imports: [common_2.CacheModule.register()],
        providers: [pronosticos_service_1.PronosticoService, prisma_service_1.PrismaService],
        exports: [pronosticos_service_1.PronosticoService],
        controllers: [pronosticos_controller_1.PronosticoController],
    })
], PronosticosModule);
exports.PronosticosModule = PronosticosModule;
//# sourceMappingURL=pronosticos.module.js.map