const tellFortune = (jobTitle, location, partnerName, numberOfChildren) => {
    return `I will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`
}

console.log(tellFortune('programmer', 'New York', 'Rana', 3))