const book1 = {name: '1984', author: 'George Orwell', year: 1984 }
const book2 = {name: 'The hobbit', author: 'J.R.R Tolkin', year: 1975 }

const bookUtils = {
    getFirstPublished : (book1, book2) => {
        return book1.year > book2.year ? book2 : book1
    },

    setNewEdition : (book, editionYear) => {
        return ( {
            ...book, 
            latestEdition : book.year > editionYear ?
             book.year : editionYear } )
    }    
}

