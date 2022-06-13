function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then(renderBooks)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// Practice code that pulls data from api
// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then((json) => {
//     let totalPages = json.reduce((previousBook, currentBook) => currentBook["numberOfPages"] + previousBook, 0)
//     console.log(totalPages)
//     return totalPages
//   })

//   fetch("https://anapioficeandfire.com/api/books")
//     .then((resp) => resp.json())
//     .then((json) => {
//     let characterNumber = 0
//     let character = 1236
//     json.find(book => {
//       characterNumber += book["characters"].length
//       debugger
//       if(characterNumber >= character){
//         let characterIndex = character - (characterNumber - book["characters"].length)
//         console.log(book["characters"][characterIndex])
//         debugger
//         return book["characters"][characterIndex]
//       }
//     })
//   })