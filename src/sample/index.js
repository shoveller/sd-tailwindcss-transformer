const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("../index");

console.log('πͺ©  νλ§ λΉλ START ---------------');
['data/global.json', 'data/dark.json', 'data/light.json'].forEach((source) => {
    const SD = styleDictionary.extend(makeThemeConfig({
        source,
        buildPath: 'theme/'
    }));
    SD.buildAllPlatforms()
});
console.log('\nπͺ©  νλ§ λΉλ FINISHED ------------\n');
