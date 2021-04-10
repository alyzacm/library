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
        const hasRead = document.createElement("button");
        const removeBtn = document.createElement("button");

        bookDiv.classList.add("book");
        

        title.textContent = book.title;
        bookDiv.appendChild(title).className = "title";

        author.textContent = "by " + book.author;
        bookDiv.appendChild(author).className = "author";

        pages.textContent = book.pages + " pages";
        bookDiv.appendChild(pages).className = "pages";

        styleReadStatus(hasRead, book.hasRead);
        hasRead.setAttribute("id", "readButton");
        hasRead.onclick = changeReadStatus;
        bookDiv.appendChild(hasRead).className = "bookButtons";

        removeBtn.innerHTML = "Remove";
        removeBtn.setAttribute("data-index", index);
        removeBtn.setAttribute("id", "removeButton");
        removeBtn.onclick = removeBook;
        bookDiv.appendChild(removeBtn).className = "bookButtons";

        container.appendChild(bookDiv);
}

function styleReadStatus(hasRead, hasReadVal){
    if(hasReadVal){
        hasRead.innerHTML = "Read";
        hasRead.style.backgroundColor = "#E7D2CC"
    }
    else{

        hasRead.innerHTML = "Not Read";
        hasRead.style.backgroundColor = "#868B8E"
    }
}
function changeReadStatus(){
    if(this.innerHTML == "Read"){
        styleReadStatus(this, false);
    }
    else{
        styleReadStatus(this, true);
    }
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
    const hasRead = document.querySelector("#hasRead");

    addBookToLibrary(title, author, pages, hasRead.checked);  
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

let cancelButton = document.getElementById("cancel-btn");
cancelButton.addEventListener("click", function(){
    closeForm();
})


addBookToLibrary("Harry Potter and the Prisoner of Azkaban", "JK Rowling", 435, true);
addBookToLibrary("IQ84", "Haruki Murakami ", 928, true);
addBookToLibrary("To All The Boys I've Loved Before", "Jenny Han", 421, true);
addBookToLibrary("Invisible Monsters", "Chuck Palahniuk", 297, false);

// displayLibrary(myLibrary); 
// console.log(myLibrary);