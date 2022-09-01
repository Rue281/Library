let form = document.getElementById("book-form");
let container = document.getElementsByClassName("container")[0];
let booksContainer = document.getElementsByClassName("books-container")[0];
let booksGrid = document.getElementsByClassName("books-grid")[0];
let addBtn = document.getElementById("add");
let iTag = addBtn.getElementsByClassName("fa-plus")[0];
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
    //add animation-related classes to submit button
    iTag.classList.add("fa-beat");
    iTag.style = 
    "--fa-animation-duration: 1s;--fa-animation-iteration-count: 1;";
    //When the user clicks the button, display the form
    form.style.display = "grid";
    form.style.gridTemplateColumns = "1fr 1fr";
    form.style.rowGap = "1em";
    form.style.alignItems = "center";

    booksContainer.style.opacity = "0.1";
});


window.onload = function(){
	
    document.onclick = function(e){
        console.log(e.target);
        
        //###TODO :should be handeled by event propagation ###
            if(e.target === container ||
                e.target === document.getElementsByTagName("header")[0]
                ){
                        
                //close the form and remove grid-related styles
                form.style.display = "none";
                form.style.removeProperty("grid-template-columns");
                form.style.removeProperty("row-gap");
                form.style.removeProperty("align-items");

                //clear form fields
                clear();
                //remove animation-related classes
                iTag.classList.remove("fa-beat");
                iTag.style.removeProperty("--fa-animation-duration");
                iTag.style.removeProperty("--fa-animation-iteration-count");
                booksContainer.style.opacity = "1";
            }
    };
};


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
let book = document.createElement("div");
book.id = "book";
//set book styles
book.style.background ="#ffedd5";
book.style.textAlign = "center";
book.style.padding = "1em";
book.style.borderRadius = "15px";
book.style.height = "15vmax";
book.style.width = "15vmax";
book.style.fontSize = "1vmax";
booksGrid.appendChild(book);

let bookInfo = document.createElement("div");
bookInfo.id = "book-info";
book.appendChild(bookInfo);

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
readCheckBox === true ? bookRead.textContent = "finished reading" : bookRead.textContent = "not completed yet";
bookInfo.appendChild(bookRead);
}