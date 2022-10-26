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
exports.PronosticoController = void 0;
const common_1 = require("@nestjs/common");
const pronosticos_service_1 = require("./pronosticos.service");
const create_pronostico_dto_1 = require("./dtos/create-pronostico.dto");
const console_1 = require("console");
let PronosticoController = class PronosticoController {
    constructor(pronosticoService) {
        this.pronosticoService = pronosticoService;
    }
    async getC() {
        return this.pronosticoService.getPronosticos();
    }
    async getUsuario(id) {
        return await this.pronosticoService.getPronosticosId(id);
    }
    async createPronostico({ idpartido, idusuario, goleslocal, golesvisita, }) {
        try {
            return this.pronosticoService.createPronostico({
                idpartido,
                idusuario,
                goleslocal,
                golesvisita,
            });
        }
        catch (_a) {
            console.log(console_1.error);
            return console_1.error;
        }
    }
    async updatePronostico(idusuario, idpartido, { goleslocal, golesvisita }) {
        try {
            if (idusuario) {
                return this.pronosticoService.updatePronostico(idusuario, idpartido, {
                    goleslocal,
                    golesvisita,
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
    async updateStatus(idpartido) {
        try {
            if (idpartido) {
                return this.pronosticoService.updateStatus(idpartido);
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
], PronosticoController.prototype, "getC", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PronosticoController.prototype, "getUsuario", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pronostico_dto_1.CreatePronosticoDto]),
    __metadata("design:returntype", Promise)
], PronosticoController.prototype, "createPronostico", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PronosticoController.prototype, "updatePronostico", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PronosticoController.prototype, "updateStatus", null);
PronosticoController = __decorate([
    (0, common_1.Controller)('api/pronosticos'),
    __metadata("design:paramtypes", [pronosticos_service_1.PronosticoService])
], PronosticoController);
exports.PronosticoController = PronosticoController;
//# sourceMappingURL=pronosticos.controller.js.map