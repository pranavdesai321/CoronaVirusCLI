const axios = require('axios')


class CovidApi {
    constructor(api) {
        this.api = api
        this.baseUrl = 'https://www.parsehub.com/api/v2/projects/t3spmtEUgABW/last_ready_run/data'
    }
    async getTotalDeaths() {
        try {
            const res = await axios.get(`${this.baseUrl}?api_key=${this.api}`)
            return res.data.total[1].value
        } catch (e) {
            console.log(e)
        }
            
            
    }

    async getDataByCountry(place) {
        
        const res = await axios.get(`${this.baseUrl}?api_key=${this.api}`)
        const countries =  res.data.country
        const country = countries.find((country) => {
            return country.name.toLowerCase() === place.toLowerCase()
        })
        if(country === -1) {
            throw new Error('Invalid Country name')
        }
        return country
        
    }

}
    covid = new CovidApi('ttok1ofbatxp')
    covid.getTotalDeaths().then((data) => console.log(data) )


    module.exports = CovidApi
