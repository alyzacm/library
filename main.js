let myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead){
    myLibrary.push(new Book(title, author, pages, hasRead));
}

function displayBooks(library){
    library.forEach(function(book){
        createBook(book);
    });
}

function createBook(book){
        const container = document.getElementById("container");
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

addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "JK Rowling", 435, true);
addBookToLibrary("IQ84", "Haruki Murakami ", 928, true);
displayBooks(myLibrary);


