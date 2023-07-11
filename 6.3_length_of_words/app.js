const stringsHandlers = (arrOfStrings) => {
    return arrOfStrings.map(animal => animal.length);
}

const animals = ['dog', 'dolphin', 'panda', 'rabbit', 'elephant'];

console.log(stringsHandlers(animals));

