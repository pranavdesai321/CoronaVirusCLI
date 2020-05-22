const Configstore = require('configstore');
const name = require('../package.json').name

class KeyManager {
    constructor() {
        this.conf = new Configstore(name)
    }
    
    setKey(key) {
        this.conf.set('apikey', key)
        return key
    }

    getKey() {
        const key = this.conf.get('apikey')
        if(!key) {
            throw new Error('No api key is set')
        }
        return key
    }

    deleteKey() {
        const key = this.conf.get('apikey')
        if(!key) {
            throw new Error('No api key is set')
        }
        this.conf.delete('apikey')
        
        return
    }

}

keyManager = new KeyManager()

module.exports = keyManager