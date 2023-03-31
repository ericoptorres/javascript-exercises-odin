const getTheTitles = function(books) {
   return books.reduce((total, book) => {
        let title = book["title"]
        total.push(title)
        return total
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;

