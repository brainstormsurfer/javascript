const today = new Date()

// 1.	Name of the current day e.g. Sunday
const day = today.toLocaleString('EN', {weekday : 'long'})


// 2.	Current day of the month e.g. 31
const monthDay = today.toLocaleString('EN', {day : 'numeric'})

// 3.	Current month e.g January
const month = today.toLocaleString('EN', {month: 'long'})


// 4.	Current Year e.g 2021
const year = today.toLocaleString('EN', {year: 'numeric'})


const getDate = (day, monthDay, month, year) => {
    return `Today is ${day} the ${monthDay} of ${month} ${year}`
}

console.log(getDate(day, monthDay, month, year));