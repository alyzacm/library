// const submitBtn = document.querySelector("#submit-btn");

let myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    let index = 0;
    if(myLibrary.length != 0){
        index = myLibrary.length;
    }
    myLibrary.push(newBook);
    displayBook(newBook, index);
}

function displayLibrary(library){
    library.forEach(function(book){
        displayBook(book);
    });
}

function displayBook(book, index){
        const container = document.getElementById("book-container");
        const bookDiv = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const hasRead = document.createElement("div");
        const removeBtn = document.createElement("button");

        bookDiv.classList.add("book");
        

        title.textContent = book.title;
        bookDiv.appendChild(title).className = "title";

        author.textContent = "by " + book.author;
        bookDiv.appendChild(author).className = "author";

        pages.textContent = book.pages + " pages";
        bookDiv.appendChild(pages).className = "pages";

        hasRead.textContent = book.hasRead;
        bookDiv.appendChild(hasRead).className = "hasRead";

        removeBtn.innerHTML = "Remove Book";
        removeBtn.setAttribute("data-index", index);
        removeBtn.onclick = removeBook;
        bookDiv.appendChild(removeBtn).className = "removeButton";

        container.appendChild(bookDiv);
}

function removeBook(){
    let index = this.getAttribute("data-index");
    myLibrary.splice(index, 1);
    const container = document.querySelector("#book-container");
    container.removeChild(this.parentNode);
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
// console.log(myLibrary);