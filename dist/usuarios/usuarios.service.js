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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const prisma_service_1 = require("../prisma/prisma.service");
const readUsuario_dto_1 = require("./dtos/readUsuario.dto");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUsuario({ correo, contrasena, nombreusuario, puntos }) {
        const usuario = await this.prisma.usuario.create({
            data: {
                correo,
                contrasena,
                nombreusuario,
            },
        });
        return usuario;
    }
    async getUsuarios() {
        const usuario = await this.prisma.usuario.findMany();
        if (!usuario)
            throw new common_1.NotFoundException('No record found');
        return (0, class_transformer_1.plainToClass)(readUsuario_dto_1.ReadUsuarioDto, usuario);
    }
    async updateUsuario(id, { nombreusuario, contrasena, correo }) {
        const usuario = await this.prisma.usuario.update({
            where: { idusuario: id },
            data: {
                nombreusuario,
                contrasena,
                correo,
            },
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Company not updated`);
        return usuario;
    }
    async updatePuntos(id, { puntosu }) {
        const usuario = await this.prisma.usuario.update({
            where: { idusuario: id },
            data: {
                puntos: puntosu,
            },
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Company not updated`);
        return usuario;
    }
    async deleteUsuario(id) {
        const usuario = await this.prisma.usuario.delete({
            where: {
                idusuario: id,
            },
        });
        if (!usuario)
            throw new common_1.NotFoundException('No record found');
        return (0, class_transformer_1.plainToClass)(readUsuario_dto_1.ReadUsuarioDto, usuario);
    }
    async getUsuarioId(id) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { idusuario: id },
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Company doesn't exist`);
        return (0, class_transformer_1.plainToClass)(readUsuario_dto_1.ReadUsuarioDto, usuario);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuarios.service.js.map