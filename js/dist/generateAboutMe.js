"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const marked_1 = __importDefault(require("marked"));
const fs_1 = require("fs");
function generateAboutMe() {
    var aboutMe = fs_1.readFileSync("./js/download/AboutMe.md", "utf-8");
    var markdownAboutMe = marked_1.default(aboutMe);
    fs_1.writeFileSync("./AboutMe.html", markdownAboutMe);
}
window.onload = generateAboutMe;
