"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 15:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguagesService = void 0;
const common_1 = __webpack_require__(6);
const octokit_1 = __webpack_require__(16);
const axios_1 = __importDefault(__webpack_require__(17));
let LanguagesService = class LanguagesService {
    getConditionalLanguages(username, ignores) {
        return;
    }
    async getLanguages(username) {
        const octokit = new octokit_1.Octokit({
            auth: process.env.GIT_TOKEN,
        });
        const response = await octokit.request('GET /users/{username}/repos', {
            username: username,
        });
        const data = response.data;
        console.log(data);
        const userResult = {};
        data.forEach(async (d) => {
            const langData = await axios_1.default.get(d.languages_url);
            for (const key in langData) {
                if (userResult[key]) {
                    userResult[key] += parseInt(langData[key]);
                }
                else {
                    userResult[key] = parseInt(langData[key]);
                }
            }
        });
        return userResult;
    }
};
LanguagesService = __decorate([
    (0, common_1.Injectable)()
], LanguagesService);
exports.LanguagesService = LanguagesService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6385527bc4c4352f1d40")
/******/ })();
/******/ 
/******/ }
;