let form = document.getElementById("book-form");
let addBtn = document.getElementById("add");
let submitBtn = document.getElementById("submitBtn");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let readCheckBox = document.getElementById("read");


function Book(title,author,pages,readCheckBox){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readCheckBox = readCheckBox;
    this.info = function(){
        console.log(
        this.title + " by " + this.author + ", " +this.pages+" pages, "+this.readCheckBox
        );
        return this.info;
    };
};

let myLibrary = [];

addBtn.addEventListener("click",function(){
    //When the user clicks the button, open the form
    form.style.display = "block";
});


// When the user clicks anywhere outside of the form, close it and clear form fields
window.onclick = function(event) {
    if (event.target == form) {
      form.style.display = "none";
      clear();
    }
  }

//add books to myLibrary
submitBtn.addEventListener("click",function(event){

    //disable submit button unless all the form is validated
    if(!form.reportValidity()){
        event.preventDefault();
    }
    else{
        let book = new Book(title.value,author.value,pages.value,readCheckBox.checked);
        myLibrary.push(book);
        console.log(myLibrary);
        console.log(book.readCheckBox)

        //clear fields after submission
        clear();

        createBooksGrid(book.title,book.author,book.pages,book.readCheckBox);
        
    }
});

//clear form fields
function clear(){
    form.reset();
}

//create books grids
function createBooksGrid(title,author,numberOfPages,readCheckBox){
let books = document.createElement("div");
books.id = "books";
document.body.appendChild(books);

let bookInfo = document.createElement("div");
bookInfo.id = "book-info";
books.appendChild(bookInfo);

let bookTitle = document.createElement("h1");
bookTitle.id = "book-title";
bookTitle.textContent = title;
bookInfo.appendChild(bookTitle);

let bookAuthor = document.createElement("h3");
bookAuthor.id = "book-author";
bookAuthor.textContent = author;
bookInfo.appendChild(bookAuthor);

let bookPages = document.createElement("h3");
bookPages.id = "book-total-pages";
bookPages.textContent = numberOfPages;
bookInfo.appendChild(bookPages);

let bookRead = document.createElement("h3");
bookRead.id = "book-read";
readCheckBox === true ? bookRead.textContent = "yes" : bookRead.textContent = "no";
bookInfo.appendChild(bookRead);
}