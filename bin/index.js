#!/usr/bin/env node



const { program } = require('commander')
const version = require('../package.json').version

program
    .version(version)
    .command('key', 'Enter API key')
    .command('check', 'Check latest data')

program.parse(process.argv)