//Convert HTML elements into DOM elements
const addNewBookBtn = document.querySelector(".newCard");
const libraryElement = document.querySelector(".library");
const showModal = document.getElementById("showModal");
const bookForm = document.getElementById("bookForm");
const submitterButton = document.querySelector("button[value=submit]");

//GET ALL INPUTS
const titleInput = document.getElementById("titleBook");
const titleError = document.querySelector("#titleBook + span.error");

const authorInput = document.getElementById("authorBook");
const authorError = document.querySelector("#authorBook + span.error");

const pagesInput = document.getElementById("numberOfPages");
const pagesError = document.querySelector("#numberOfPages + span.error");

//Store of book objects
const myLibrary = [];

//Class

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

/*
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
*/

//Take user input and store the new book object into an array
function addBookToLibrary(title, author, page, read) {
  const addBook = new Book(title, author, page, read);
  myLibrary.push(addBook);
  return addBook;
}

//Examples
addBookToLibrary("The Twenty-One", "Elizabeth Rusch", 272, false);
addBookToLibrary("Las Change Books", "Veronica Roth", 368, true);
addBookToLibrary("The Great Design", "Stephen Hawking", 200, false);
addBookToLibrary("The Why Not 100", "Multiple Authors", 300, true);

//Loop through the array and display each book
function showBook(myArr) {
  myArr.forEach((books, index) => {
    let title = books.title;
    let author = books.author;
    let pages = books.pages;
    let readStatus = books.read;
    let position = index;
    createCard(title, author, pages, readStatus, position);
  });
}

//Create a card element which will use the information of the Book Object
function createCard(title, author, page, read, position) {
  //Create a Card element
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.id = position;
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
  pagesCard.textContent = "Pages: " + page;

  readOrNot = read === true ? "Read" : "Not read yet";
  const statusReadCard = document.createElement("p");
  statusReadCard.classList.add("statusReadCard");
  cardElement.appendChild(statusReadCard);
  statusReadCard.textContent = readOrNot;
  //statusReadCard.textContent = myLibrary[position].read ? "Read" : "Not read yet";

  //Create buttons for deleting and updating read status

  //Create a read or not read button and toggle between true and false of the property of the array
  const changeStatusReadElement = document.createElement("button");
  changeStatusReadElement.classList.add("changeReadStatus");
  cardElement.appendChild(changeStatusReadElement);
  //    changeStatusReadElement.textContent = "Read";
  changeStatusReadElement.textContent = myLibrary[position].read
    ? "Mark as Not Read"
    : "Mark as Read";

  changeStatusReadElement.addEventListener("click", () => {
    // Toggle the read status
    myLibrary[position].read = !myLibrary[position].read;

    // Update the status text and button text
    statusReadCard.textContent = myLibrary[position].read
      ? "Read"
      : "Not read yet";
    changeStatusReadElement.textContent = myLibrary[position].read
      ? "Mark as Not Read"
      : "Mark as Read";
  });

  const deleteCardElement = document.createElement("button");
  deleteCardElement.classList.add("deleteCard");
  cardElement.appendChild(deleteCardElement);
  deleteCardElement.textContent = "Delete";

  deleteCardElement.addEventListener("click", () => {
    constNewArray = myLibrary.splice(position, 1);
    //        showBook(myLibrary);
    document.getElementById(position).remove();
  });
}

// "+" button opens the <dialog> modally
addNewBookBtn.addEventListener("click", () => {
  showModal.showModal();
});

bookForm.addEventListener("submit", (event) => {
  //Dont submit this form
  event.preventDefault();
  //Get data from form after submit button being pressed
  const formData = new FormData(bookForm, submitterButton);
  //Convert the data obtained from the form into an object
  const formProps = Object.fromEntries(formData);

  //Store items from object into variables
  let title = formProps.title;
  let author = formProps.author;
  let pages = formProps.pages;
  let statusRead = formProps.statusRead;
  //Handle checked or not checked checkbox
  let readOrNot = statusRead === "on" ? true : false;
  // Add the book and get the newly added book object
  const newBook = addBookToLibrary(title, author, pages, readOrNot);

  // Create a card for the new book
  createCard(
    newBook.title,
    newBook.author,
    newBook.pages,
    newBook.read,
    myLibrary.length - 1
  );

  //Clear form after pressing the confirm button
  document.getElementById("bookForm").reset();

  //Close the modal after pressing the confirm button
  showModal.close();
});

function showErrors(elementName) {}

/*
//GET ALL INPUTS
const titleInput = document.getElementById("titleBook");
const titleError = document.querySelector("#titleBook + span.error");

const authorInput = document.getElementById("authorBook");
const authorError = document.querySelector("#authorBook + span.error");

const pagesInput = document.getElementById("numberOfPages");
const pagesError = document.querySelector("#numberOfPages + span.error");
*/

//Generate custom error messages
titleInput.addEventListener("input", () => {
  //If the title is valid
  if (titleInput.validity.valid) {
    //Remove al message errors
    titleError.textContent = "";
    titleError.className = "error";
  } else {
    //Empty
    if (titleInput.validity.valueMissing) {
      titleError.textContent = "Dont leave me empty";
    } //Exceed characters
    else if (titleInput.validity.tooLong) {
      titleError.textContent = `You are exceeding the ${titleInput.value.length} characters`;
    } //Need more characters
    else if (titleInput.validity.tooShort) {
      titleError.textContent = `The title should be at least ${titleInput.minLength} characters`;
    }
  }
});

authorInput.addEventListener("input", () => {
  //If the title is valid
  if (authorInput.validity.valid) {
    //Remove al message errors
    authorError.textContent = "";
    authorError.className = "error";
  } else {
    //Empty
    if (authorInput.validity.valueMissing) {
      authorError.textContent = "Dont leave me empty";
    } //Exceed characters
    else if (authorInput.validity.tooLong) {
      authorError.textContent = `You are exceeding the ${authorInput.value.length} characters`;
    } //Need more characters
    else if (authorInput.validity.tooShort) {
      authorError.textContent = `The Author should be at least ${authorInput.minLength} characters`;
    }
  }
});

pagesInput.addEventListener("input", () => {
  //If the title is valid
  if (pagesInput.validity.valid) {
    //Remove al message errors
    pagesError.textContent = "";
    pagesError.className = "error";
  } else {
    //Empty
    if (pagesInput.validity.valueMissing) {
      pagesError.textContent = "Dont leave me empty";
    } //Exceed characters
    else if (pagesInput.validity.rangeOverflow) {
      pagesError.textContent = `You are exceeding the ${pagesInput.max} pages`;
    } //Need more characters
    else if (pagesInput.validity.rangeUnderflow) {
      pagesError.textContent = `The number of pages should be at least ${pagesInput.min} pages`;
    }
  }
});
//IT SHOULD BE CALLED AFTER THE SUBMIT BUTTON WAS PRESSED
showBook(myLibrary);
