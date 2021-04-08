const submitBtn = document.querySelector("#submit-btn");

let myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayLibrary(library){
    library.forEach(function(book){
        displayBook(book);
    });
}

function displayBook(book){
        const container = document.getElementById("book-container");
        const bookDiv = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const hasRead = document.createElement("div");

        bookDiv.classList.add("book");

        title.textContent = book.title;
        bookDiv.appendChild(title).className = "title";

        author.textContent = "by " + book.author;
        bookDiv.appendChild(author).className = "author";

        pages.textContent = book.pages + " pages";
        bookDiv.appendChild(pages).className = "pages";

        hasRead.textContent = book.hasRead;
        bookDiv.appendChild(hasRead).className = "hasRead";
     
        container.appendChild(bookDiv);
}

function createBookFromInput(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const hasRead = document.querySelector("#hasRead").value;
    addBookToLibrary(title, author, pages, hasRead);  
}

function openForm(){
    document.getElementById("book-form").style.display = "block";
}

function closeForm(){
    document.getElementById("book-form").style.display = "none";
}

const form = document.getElementById("form-container");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    createBookFromInput();
    closeForm();
    form.reset();
})

addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "JK Rowling", 435, true);
addBookToLibrary("IQ84", "Haruki Murakami ", 928, true);


// displayLibrary(myLibrary); 
console.log(myLibrary);