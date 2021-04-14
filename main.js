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
    populateStorage();
}

function displayLibrary(library){
    let i = 0;
    library.forEach(function(book){
        displayBook(book, i);
        i++;
    });
}

function displayBook(book, index){
        const container = document.getElementById("book-container");
        const bookDiv = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const hasRead = document.createElement("button");
        const removeBtn = document.createElement("button");

        bookDiv.classList.add("book");

        title.textContent = book.title;
        bookDiv.appendChild(title).className = "title";

        author.textContent = "by " + book.author;
        bookDiv.appendChild(author).className = "author";

        pages.textContent = book.pages + " pages";
        bookDiv.appendChild(pages).className = "pages";

        setReadStatus(hasRead, book.hasRead, index);
        hasRead.setAttribute("id", "readButton");
        hasRead.setAttribute("data-index", index);
        hasRead.onclick = toggleReadStatus;
        bookDiv.appendChild(hasRead).className += " bookButtons";

        removeBtn.innerHTML = "Remove";
        removeBtn.setAttribute("id", "removeButton");
        removeBtn.onclick = removeBook;
        bookDiv.appendChild(removeBtn).className = "bookButtons";

        container.appendChild(bookDiv);
}

function setReadStatus(hasRead, hasReadVal){
    if(hasReadVal){
        hasRead.innerHTML = "Read";
        hasRead.classList.add("read-btn");
        hasRead.classList.remove("not-read-btn");

    }
    else{
        hasRead.innerHTML = "Not Read";
        hasRead.classList.add("not-read-btn");
        hasRead.classList.remove("read-btn");
    }
}

function toggleReadStatus(e){
    let index = this.getAttribute("data-index");
    myLibrary[index].hasRead = !(myLibrary[index].hasRead);

    if(this.innerHTML == "Read"){
        setReadStatus(this, false);
    }
    else{
        setReadStatus(this, true);
    }
    populateStorage();
}

function removeBook(){
    let bookTitle = this.parentNode.firstChild.innerHTML;
    myLibrary = myLibrary.filter(book => book.title !== bookTitle);

    const container = document.querySelector("#book-container");
    container.removeChild(this.parentNode);
    populateStorage();
}

function createBookFromInput(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const hasRead = document.querySelector("#hasRead");

    addBookToLibrary(title, author, pages, hasRead.checked);  
}

let modal = document.querySelector("#modal");
let modalOverlay = document.querySelector("#modal-overlay");

function openForm(){
    modal.classList.add("active");
    modalOverlay.classList.add("active");
}

function closeForm(){
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
}

const form = document.getElementById("form-container");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    createBookFromInput();
    closeForm();
    form.reset();
})

let cancelButton = document.getElementById("cancel-btn");
cancelButton.addEventListener("click", function(){
    closeForm();
})

function populateStorage(){
    localStorage.setItem("storageLibrary", JSON.stringify(myLibrary));
}

function checkStorage(){
    let storage = localStorage.getItem("storageLibrary");
    if(storage!=null && storage!=undefined && storage != "[]"){
        myLibrary = JSON.parse(localStorage.getItem("storageLibrary"));
        displayLibrary(myLibrary);
    }
    else{
        addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 435, true);
        addBookToLibrary("IQ84", "Haruki Murakami ", 928, true);
        addBookToLibrary("To All The Boys I've Loved Before", "Jenny Han", 421, true);
        addBookToLibrary("Invisible Monsters", "Chuck Palahniuk", 297, false);
    }
}

checkStorage();
