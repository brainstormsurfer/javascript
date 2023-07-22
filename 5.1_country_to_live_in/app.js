const countryToLiveIn = (language, isIsland, population, country) => {

    if (language === 'English' && !isIsland && population < 50) {

        console.log(`${country} meets the criteria of a country you want to live in`) 
    } else {
        console.log(`${country} doesn't meets the criteria of a country you want to live in`)
    }

}

    countryToLiveIn('English', false, 8, 'Israel')

