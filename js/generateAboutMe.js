function generateAboutMe() {
	import marked from '../node_modules/marked';
	import { readFileSync, writeFileSync } from '../node_modules/fs';
	var aboutMe = readFileSync('./js/download/AboutMe.md', 'utf-8');
	var markdownAboutMe = marked(aboutMe);

	writeFileSync('./AboutMe.html', markdownAboutMe);
}
