const india = 1408
const brazil = 214.3
const island = 0.372
const china = 1412

const populations = [india, brazil, island, china]
const countries = ['india', 'brazil', 'island', 'china']

function populationsPercentages(population){
    return ((population / 7900) * 100).toFixed(3)        
}




for (let i = 0 ; i < countries.length; i++) {   
    console.log(`${countries[i]} population (${populations[i]} million people) is ${populationsPercentages(populations[i])}% from the entire world population.`);
}


