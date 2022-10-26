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
exports.EquiposController = void 0;
const common_1 = require("@nestjs/common");
const equipos_service_1 = require("./equipos.service");
const read_equipos_dto_1 = require("./dtos/read-equipos.dto");
const console_1 = require("console");
let EquiposController = class EquiposController {
    constructor(equipoService) {
        this.equipoService = equipoService;
    }
    async getPronosticos() {
        return this.equipoService.getEquipos();
    }
    async createPronostico({ nombre, imagen }) {
        try {
            return this.equipoService.createEquipos({
                nombre,
                imagen,
            });
        }
        catch (_a) {
            console.log(console_1.error);
            return console_1.error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EquiposController.prototype, "getPronosticos", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [read_equipos_dto_1.ReadEquipoDto]),
    __metadata("design:returntype", Promise)
], EquiposController.prototype, "createPronostico", null);
EquiposController = __decorate([
    (0, common_1.Controller)('api/equipos'),
    __metadata("design:paramtypes", [equipos_service_1.EquiposService])
], EquiposController);
exports.EquiposController = EquiposController;
//# sourceMappingURL=equipos.controller.js.map