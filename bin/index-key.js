const { program } = require('commander')
const key = require('../commands/key')

program
    .command('set')
    .description('Set ur API key')
    .action(() => key.setAPIKey())

program
    .command('show')
    .description('show ur api key')
    .action(() => key.showApiKey())

program
    .command('delete')
    .description('delete ur API key')
    .action(() => key.deleteApiKey())

program.parse(process.argv)