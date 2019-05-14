#! /usr/bin/env node
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var log = console.log;
var HOST_PATH = 'c:/windows/system32/drivers/etc/hosts';
var PATTERN = /^[\t ]*(?<local>[:\d.]+)[\t ]+(?<remote>[\w-.]+)[\t ]*(?:#[ ]*(?<comment>.*))?$/gm;
var menu = function () { return __awaiter(_this, void 0, void 0, function () {
    var VIEW_ENTRIES, ADD_ENTRY, option, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                VIEW_ENTRIES = 'view_entries';
                ADD_ENTRY = 'add_entry';
                return [4 /*yield*/, inquirer.prompt([{
                            type: 'list',
                            name: 'option',
                            message: 'What do you want to do?',
                            choices: [
                                { name: 'View', value: VIEW_ENTRIES },
                                { name: 'Add', value: ADD_ENTRY },
                                new inquirer.Separator(),
                                'Quit'
                            ]
                        }])];
            case 1:
                option = (_b.sent()).option;
                _a = option;
                switch (_a) {
                    case VIEW_ENTRIES: return [3 /*break*/, 2];
                    case ADD_ENTRY: return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2: return [4 /*yield*/, view_entries()];
            case 3: return [2 /*return*/, _b.sent()];
            case 4: return [4 /*yield*/, add_entry()];
            case 5: return [2 /*return*/, _b.sent()];
            case 6: return [2 /*return*/];
        }
    });
}); };
var view_entries = function () { return __awaiter(_this, void 0, void 0, function () {
    var hosts, entries, match, _a, local, remote, comment, _i, entries_1, _b, local, remote, comment;
    return __generator(this, function (_c) {
        hosts = fs.readFileSync(HOST_PATH, { encoding: 'UTF8' });
        entries = [];
        while ((match = PATTERN.exec(hosts)) != null) {
            _a = match.groups, local = _a.local, remote = _a.remote, comment = _a.comment;
            entries.push({
                local: local,
                remote: remote,
                comment: comment
            });
        }
        for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            _b = entries_1[_i], local = _b.local, remote = _b.remote, comment = _b.comment;
            log(chalk_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{blue ", "}   {magenta ", "} {yellow ", "}"], ["{blue ", "}   {magenta ", "} {yellow ", "}"])), local, remote.padEnd(50), comment ? comment : ""));
        }
        return [2 /*return*/];
    });
}); };
var add_entry = function () { return __awaiter(_this, void 0, void 0, function () {
    var local_question, remote_question, comment_question, _a, local, remote, comment;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                local_question = {
                    type: 'input',
                    message: 'What is the local address?',
                    name: 'local',
                    default: '127.0.0.1',
                    validate: function (input) {
                        if (!input.length) {
                            return 'A local address is required';
                        }
                        return true;
                    }
                };
                remote_question = {
                    type: 'input',
                    message: 'What is the remote address?',
                    name: 'remote',
                    validate: function (input) {
                        if (!input.length) {
                            return 'A remote address is required';
                        }
                        return true;
                    }
                };
                comment_question = {
                    type: 'input',
                    message: 'What is the comment?',
                    name: 'comment'
                };
                return [4 /*yield*/, inquirer.prompt([local_question, remote_question, comment_question])];
            case 1:
                _a = _b.sent(), local = _a.local, remote = _a.remote, comment = _a.comment;
                log(chalk_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{blue ", "}   {magenta ", "} {yellow ", "}"], ["{blue ", "}   {magenta ", "} {yellow ", "}"])), local, remote.padEnd(50), comment ? comment : ""));
                return [4 /*yield*/, add({ local: local, remote: remote, comment: comment.trim() })];
            case 2:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var add = function (_a) {
    var local = _a.local, remote = _a.remote, comment = _a.comment;
    return __awaiter(_this, void 0, void 0, function () {
        var add;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer.prompt([{
                            type: 'confirm',
                            message: 'Are you sure you want to add this entry?',
                            name: 'add'
                        }])];
                case 1:
                    add = (_b.sent()).add;
                    if (add) {
                        fs.appendFileSync(HOST_PATH, "\n" + local + "  " + remote + "   " + (comment ? "# " + comment : ""));
                    }
                    return [2 /*return*/];
            }
        });
    });
};
menu().then();
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map