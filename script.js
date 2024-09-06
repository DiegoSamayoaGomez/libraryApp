//OBject constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}` //Its better to use return instead of log the info
    }
}

const book1 = new Book("The great design", "Steven Hawking", 500, "Not read yet");
console.log(book1.info());