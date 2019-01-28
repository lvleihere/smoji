#! /usr/bin/env node

const program = require('commander')
const axios = require('axios')
const { table } = require('table')
const toolsInfo = require('./package.json');
const emoji = require('./assets/emoji');

// 初始化commander
program
  .version(toolsInfo.version, '-v, --version')
  .usage('<cmd> [option]')

// 添加可选指令
program
  .option('-n --new [dir]', 'an dir argument')
  .parse(process.argv)

// console.log(emoji);

let tableEmoji = emoji.map(list => [
    list.emoji,
    list.explaination
]);

const title = [
    'emoji',
    'explaination'
];

tableEmoji = [title].concat(tableEmoji);

console.log(table(tableEmoji));