const open = document.getElementById("addBook");
const close = document.getElementById("close");
const add = document.getElementById("add");
const dialog = document.getElementById("dialog");
const main = document.querySelector(".main");

const bookName = document.getElementById("bookName");
const author = document.getElementById("author");
const pageNum = document.getElementById("pageNum");
const status = document.getElementById("status");

function Books(bookName, author, pageNum, status) {
    this.bookName = bookName;
    this.author = author;
    this.pageNum = pageNum;
    this.status = status;
}

let bArr = [];

function addBookToArray(event) {
    event.preventDefault();
    
    const book = new Books(bookName.value, author.value, pageNum.value, status.value);
    bArr.push(book);
}

function addBookToDiv() {
    const latestBook = bArr[bArr.length - 1];
    const newCard = document.createElement('div');
    main.appendChild(newCard);
   
    newCard.innerHTML = `
        <p><strong>Title:</strong> ${latestBook.bookName}</p>
        <p><strong>Author:</strong> ${latestBook.author}</p>
        <p><strong>Page Number:</strong> ${latestBook.pageNum}</p>
       <button class="btn toggle"> ${latestBook.status}</button>
       <br> <br>
       <button class="btn remove-btn"> Remove Book </button>

    `;
    
}
let count=0;
let statusArr=["Read","Not Read","In Progress"];

main.addEventListener("click", function(e){
     if(e.target && e.target.classList.contains("remove-btn")){
        e.target.parentNode.remove();
     }
     if (e.target && e.target.classList.contains("toggle")) {
        // Get the current status in the button's textContent
        const currentStatus = e.target.textContent;

        // Find the index of the current status in the statusArr
        let currentIndex = statusArr.indexOf(currentStatus);

        // Cycle to the next status in the array
        let nextIndex = (currentIndex + 1) % statusArr.length;
        e.target.textContent = statusArr[nextIndex];
    }

     
});

open.addEventListener("click", function() {
    dialog.showModal();
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    dialog.close();
});

add.addEventListener("click", function(event) {
    
    if (bookName.value === "" || author.value === "" || pageNum.value === "" || status.value === "") {
        alert("All fields must be filled out.");
        return;
       
    }
    addBookToArray(event);
    addBookToDiv();
    dialog.close();
    bookName.value=" ";
     author.value=" ";
     pageNum.value=" ";
      status.value=" ";
    

});
