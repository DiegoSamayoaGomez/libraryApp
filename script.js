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
addBookToLibrary("book3", "author3", 123, "no");
addBookToLibrary("book4", "author4", 123, "Yes");

//Loop through the array and display each book
function showBook(myArr) {
    myArr.forEach((books) => {
        let title = books.title;
        let author = books.author;
        let pages = books.pages;
        let readStatus = books.read;
        createCard(title, author, pages, readStatus);

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
function createCard(title, author, page, read) {
    //Create a Card element
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    libraryElement.appendChild(cardElement);

    //Create HTML elements that show the book information in individual cards
    const titleCard = document.createElement("h3");
    titleCard.classList.add("titleCard");
    cardElement.appendChild(titleCard);
    titleCard.textContent = title;

    const authorCard = document.createElement("h4");
    authorCard.classList.add("authorCard");
    cardElement.appendChild(authorCard);
    authorCard.textContent = author;
    
    const pagesCard = document.createElement("p");
    pagesCard.classList.add("pagesCard");
    cardElement.appendChild(pagesCard);
    pagesCard.textContent = "pages: " + page;
    
    const statusReadCard = document.createElement("p");
    statusReadCard.classList.add("statusReadCard");
    cardElement.appendChild(statusReadCard);
    statusReadCard.textContent = read;
    



}

addNewBookBtn.addEventListener("click", () => {
    alert("uwu");
});
/*

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});*/