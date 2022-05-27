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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguagesService = void 0;
const common_1 = __webpack_require__(6);
const octokit_1 = __webpack_require__(16);
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
        const userResult = {};
        for (let i = 0; i < data.length; i++) {
            const { data: d } = await octokit.request(data[i].languages_url);
            for (const key in Object.keys(d)) {
                if (Object.keys(userResult).includes(key)) {
                    userResult.key += d.key;
                }
                else {
                    userResult.key = d.key;
                }
                console.log(key);
            }
        }
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
/******/ 	__webpack_require__.h = () => ("1b387ee1555f43f2cb08")
/******/ })();
/******/ 
/******/ }
;