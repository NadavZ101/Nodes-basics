import { utilService } from './services/util.service.js'


downloadCountryFlags()
// getCountries()

function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}
function getCountries() {
    var countries = []

    countries = utilService.readJsonFile('./data/countries.json')

    countries = sortCountries(countries)
    countries = sliceCountries(countries, 5)
    return countries
}

getCountries()
function downloadFlags(countries) {
    // DONE: use the download() function to download a flag
    // the name of the file should be the country name
    let promises = countries.map(country => {
        return utilService.download(`${country.flags.png}`, `./flags/${country.name.common}.png`)
    })

    // DONE: use Promise.all()
    return Promise.all(promises)
        .then(results => {
            console.log("All flags downloaded successfully")
            results.forEach(result => console.log(result))
        })
        .catch(error => {
            console.error("An error occurred while downloading the flags", error);
        })
}

function sortCountries(countries) {
    countries.sort((a, b) => b.population - a.population)
    return countries
}

function sliceCountries(countries, numOfCountries) {
    let slicedCountries = countries.slice(0, numOfCountries)
    // console.log(slicedCountries)
    return slicedCountries
}