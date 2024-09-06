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
    /*
        let title = prompt("Enter book title");
    let author = prompt("Enter book author");
    let page = prompt("Enter number of pages of the book");
    let read = prompt("Have you finished the book?");
    */
    const addBook = new Book(title, author, page, read);
    myLibrary.push(addBook);

}

addBookToLibrary("book1", "author1", 123, "no");
addBookToLibrary("book2", "author2", 123, "yes");
addBookToLibrary("book3", "author2", 123, "no");


//Loop through the array and display each book
function showBook(myArr) {
    for (let index = 0; index < myArr.length; index++) {
        console.table(myArr[index]);
    }
}

showBook(myLibrary);