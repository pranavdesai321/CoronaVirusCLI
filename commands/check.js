const keyManger = require('../lib/KeyManger')
const CovidApi = require('../lib/CovidApi')

const check = {
    async getData(cmd) {
        try {
            key = keyManger.getKey()
            covid = new CovidApi(key)
            if (cmd.country === 'total') {
                const data = await covid.getTotalDeaths()
                console.log('Toatal Deaths: ', data.brightRed)
            } else {
                const data = await covid.getDataByCountry(cmd.country)
                console.log(`Country: ${data.name.yellow} | Total Cases: ${data.total_cases.red} | Total Deaths: ${data.total_deaths.brightRed}`)
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = check