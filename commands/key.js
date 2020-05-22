const keyManager = require('../lib/KeyManger')
const inquirer = require('inquirer')
const color = require('colors')

const key = {
    async setAPIKey() {
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'apiKey',
                message: 'Enter API key',
                validate(answer) {
                    return answer.length > 0 ? true: 'Enter correct key'
                }
            }
        ])
        keyManager.setKey(answer.apiKey)
        console.log('API key'.green, 'set sucessfully')
    },

    showApiKey() {
        try {
            const key = keyManager.getKey()
            console.log(key.green)
        } catch (e) {
            console.log(e.message.red)
        }
        
    },

    deleteApiKey() {
        try {
            keyManager.deleteKey()
            console.log('Deleted Successfuly'.green)
        } catch (error) {
            console.log(error.message.red)
        }
    }
}

module.exports = key