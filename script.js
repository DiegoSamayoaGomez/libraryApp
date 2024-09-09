//Convert HTML elements into DOM elements
const addNewBookBtn = document.querySelector(".newCard");
const libraryElement = document.querySelector(".library");

//Store of book objects
const myLibrary = [];

//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}` //Its better to use return instead of log the info
    }
}

//Take user input and store the new book object into an array
function addBookToLibrary(title, author, page, read) {
    const addBook = new Book(title, author, page, read);
    myLibrary.push(addBook);

}

//Examples
addBookToLibrary("book1", "author1", 123, "no");
addBookToLibrary("book2", "author2", 123, "yes");
addBookToLibrary("book3", "author2", 123, "no");
addBookToLibrary("book3", "author2", 123, "no");

//Loop through the array and display each book
function showBook(myArr) {
    myArr.forEach((books) => {
        console.log(books.title);
        console.log(books.author);
        console.log(books.pages);
        console.log(books.read);
        createCard();
    });
    /*
    OLD VERSION
     for (let index = 0; index < myArr.length; index++) {
        console.log("------")
        console.log(myArr[index].title);  
    }
    */

}

showBook(myLibrary);

//Create a card element which will use the information of the Book Object
//title, author, page, read
function createCard() {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    libraryElement.appendChild(cardElement);

}

addNewBookBtn.addEventListener("click", () => {
    alert("uwu");
});
/*

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});*/