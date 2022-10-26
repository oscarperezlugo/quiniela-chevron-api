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
exports.PronosticoService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const prisma_service_1 = require("../prisma/prisma.service");
const create_pronostico_dto_1 = require("./dtos/create-pronostico.dto");
let PronosticoService = class PronosticoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPronosticos() {
        const pronostico = await this.prisma.pronosticos.findMany();
        if (!pronostico)
            throw new common_1.NotFoundException('No record found');
        return (0, class_transformer_1.plainToClass)(create_pronostico_dto_1.CreatePronosticoDto, pronostico);
    }
    async getPronosticosId(id) {
        const pronostico = await this.prisma.pronosticos.findMany({
            where: { idusuario: id },
        });
        if (!pronostico)
            throw new common_1.NotFoundException(`doesn't exist`);
        return (0, class_transformer_1.plainToClass)(create_pronostico_dto_1.CreatePronosticoDto, pronostico);
    }
    async createPronostico({ idusuario, idpartido, goleslocal, golesvisita, }) {
        const pronostico = await this.prisma.pronosticos.create({
            data: {
                idpartido,
                idusuario,
                goleslocal,
                golesvisita,
            },
        });
        return pronostico;
    }
    async updatePronostico(idusuario, idpartido, { golesvisita, goleslocal }) {
        const pronostico = await this.prisma.pronosticos.updateMany({
            where: {
                idusuario: idusuario,
                idpartido: idpartido,
            },
            data: {
                goleslocal,
                golesvisita,
            },
        });
        if (!pronostico)
            throw new common_1.NotFoundException(`Company not updated`);
        return pronostico;
    }
    async updateStatus(id) {
        const pronostico = await this.prisma.pronosticos.updateMany({
            where: { idpartido: id },
            data: {
                status: 1,
            },
        });
        if (!pronostico)
            throw new common_1.NotFoundException(`Company not updated`);
        return pronostico;
    }
};
PronosticoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PronosticoService);
exports.PronosticoService = PronosticoService;
//# sourceMappingURL=pronosticos.service.js.map