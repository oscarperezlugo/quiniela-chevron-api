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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const createUsuario_dto_1 = require("./dtos/createUsuario.dto");
const console_1 = require("console");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async getCompanies() {
        return this.usuarioService.getUsuarios();
    }
    async getUsuario(id) {
        return await this.usuarioService.getUsuarioId(id);
    }
    async createUsuario({ correo, nombreusuario, contrasena }) {
        try {
            return this.usuarioService.createUsuario({
                contrasena,
                correo,
                nombreusuario,
                puntos: 0,
            });
        }
        catch (_a) {
            console.log(console_1.error);
            return console_1.error;
        }
    }
    async updateUsuario(id, { correo, contrasena, nombreusuario, puntos }) {
        try {
            if (id) {
                return this.usuarioService.updateUsuario(id, {
                    contrasena,
                    correo,
                    nombreusuario,
                    puntos,
                });
            }
            else {
                return 'Unauthorized';
            }
        }
        catch (_a) {
            return console_1.error;
        }
    }
    async deleteUsuario(id) {
        try {
            if (id) {
                return await this.usuarioService.deleteUsuario(id);
            }
            else {
                return 'Unauthorized';
            }
        }
        catch (_a) {
            return console_1.error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsuario", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUsuario_dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "createUsuario", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "updateUsuario", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "deleteUsuario", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('api/usuario'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuarios.controller.js.map