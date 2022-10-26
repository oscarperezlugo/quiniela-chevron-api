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
exports.PartidosController = void 0;
const common_1 = require("@nestjs/common");
const partidos_service_1 = require("./partidos.service");
const read_partidos_dto_1 = require("./dtos/read-partidos.dto");
const console_1 = require("console");
let PartidosController = class PartidosController {
    constructor(partidosService) {
        this.partidosService = partidosService;
    }
    async getPartido() {
        return this.partidosService.getPartidos();
    }
    async createPartido({ goleslocal, golesvisita, local, visita, fecha, }) {
        try {
            return this.partidosService.createPartido({
                visita,
                local,
                goleslocal,
                golesvisita,
                fecha,
            });
        }
        catch (_a) {
            console.log(console_1.error);
            return console_1.error;
        }
    }
    async updatePartido(idpartido, { goleslocal, golesvisita }) {
        try {
            if (idpartido) {
                return this.partidosService.updatePartido(idpartido, {
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
                return this.partidosService.updateStatus(idpartido);
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
], PartidosController.prototype, "getPartido", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [read_partidos_dto_1.ReadPartidoDto]),
    __metadata("design:returntype", Promise)
], PartidosController.prototype, "createPartido", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PartidosController.prototype, "updatePartido", null);
__decorate([
    (0, common_1.Put)('/status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartidosController.prototype, "updateStatus", null);
PartidosController = __decorate([
    (0, common_1.Controller)('api/partidos'),
    __metadata("design:paramtypes", [partidos_service_1.PartidosService])
], PartidosController);
exports.PartidosController = PartidosController;
//# sourceMappingURL=partidos.controller.js.map