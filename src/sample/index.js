const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("../index");

console.log('🪩  테마 빌드 START ---------------');
['data/global.json', 'data/dark.json', 'data/light.json'].forEach((source) => {
    const SD = styleDictionary.extend(makeThemeConfig({
        source,
        buildPath: 'theme/'
    }));
    SD.buildAllPlatforms()
});
console.log('\n🪩  테마 빌드 FINISHED ------------\n');
