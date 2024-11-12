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
    event.preventDefault(); // Prevent form from refreshing the page
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
        <p><strong>Status:</strong> <span style="background-color: limegreen; text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);"> ${latestBook.status} </span></p>
    `;
}

open.addEventListener("click", function() {
    dialog.showModal();
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    dialog.close();
});

add.addEventListener("click", function(event) {
    addBookToArray(event);
    addBookToDiv();
    dialog.close();
    bookName.value=" ";
     author.value=" ";
     pageNum.value=" ";
      status.value=" ";
    

});
