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
exports.EquiposService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const prisma_service_1 = require("../prisma/prisma.service");
const read_equipos_dto_1 = require("./dtos/read-equipos.dto");
let EquiposService = class EquiposService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getEquipos() {
        const equipos = await this.prisma.equipos.findMany();
        if (!equipos)
            throw new common_1.NotFoundException('No record found');
        return (0, class_transformer_1.plainToClass)(read_equipos_dto_1.ReadEquipoDto, equipos);
    }
    async createEquipos({ nombre, imagen }) {
        const equipo = await this.prisma.equipos.create({
            data: {
                nombre,
                imagen,
            },
        });
        return equipo;
    }
};
EquiposService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EquiposService);
exports.EquiposService = EquiposService;
//# sourceMappingURL=equipos.service.js.map