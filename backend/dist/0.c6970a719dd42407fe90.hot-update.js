"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 14:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguagesController = void 0;
const common_1 = __webpack_require__(6);
const languages_service_1 = __webpack_require__(15);
let LanguagesController = class LanguagesController {
    constructor(languagesService) {
        this.languagesService = languagesService;
    }
    async getLanguages(username, body) {
        if (body.ingore) {
            return this.languagesService.getConditionalLanguages(username, body.ingore);
        }
        else {
            const data = await this.languagesService.getLanguages(username);
            return data;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "getLanguages", null);
LanguagesController = __decorate([
    (0, common_1.Controller)('languages'),
    __metadata("design:paramtypes", [typeof (_a = typeof languages_service_1.LanguagesService !== "undefined" && languages_service_1.LanguagesService) === "function" ? _a : Object])
], LanguagesController);
exports.LanguagesController = LanguagesController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b53fddda22e22050b1f")
/******/ })();
/******/ 
/******/ }
;