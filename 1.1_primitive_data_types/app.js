
let massage = "You enter a dimly light room"

let treasureCount = 2   

let key = { type: "golden key with intricate carvings" }

let isTrapActivated = false

let secretPassage = null

let mysteriousArtifact = undefined

let ancientSymbol = Symbol("shekerkolshehu")

let printTypesArr = [ massage, treasureCount, key , isTrapActivated, secretPassage, mysteriousArtifact, ancientSymbol ]

console.log(`types of the variables above are: `)

for (let i = 0 ; i <= printTypesArr.length ; i++) {    
    console.log(`${i}. ${typeof(printTypesArr[i])} `);
}