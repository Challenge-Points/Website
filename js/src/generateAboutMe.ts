import marked from "marked";

import { readFileSync, writeFileSync } from "fs";

function generateAboutMe() {
	var aboutMe = readFileSync("./js/download/AboutMe.md", "utf-8");
	var markdownAboutMe = marked(aboutMe);

	writeFileSync("./AboutMe.html", markdownAboutMe);
}

window.onload = generateAboutMe;
