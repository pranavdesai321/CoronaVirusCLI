const { program } = require('commander')    
const key = require('../commands/key')
const check = require('../commands/check')

program
    .command('deaths')
    .description('Get total deaths from coronavirus')
    .option('--country <type>' ,'Add specific country for data', 'total')
    .action((cmd) => check.getData(cmd))

program.parse(process.argv)