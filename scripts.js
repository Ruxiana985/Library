const open = document.getElementById('openDialog');
const close = document.getElementById('closeDialog');
const dialog = document.getElementById('dialog');
const cards = document.querySelector('.grid-cards');
const add = document.getElementById('addbook');

const bookname= document.getElementById('bookname');
const author = document.getElementById('author');
const page = document.getElementById('page-numbers');
const status21 = document.getElementById('status');

const bookArray = [];

function Book(bookname, author, pagenum, status) {
    this.bookname = bookname;
    this.author = author;
    this.pagenum = pagenum;
    this.status = status;
}

function addBooks() {
    const newCard = document.createElement('div');
    newCard.classList.add('book-I');
    cards.appendChild(newCard);

    addBookToArray();

    const latestBook = bookArray[bookArray.length - 1];
    const content = document.createElement('div');
    content.textContent = `Title: ${latestBook.bookname} Author: ${latestBook.author}`;
    newCard.appendChild(content);
}

function addBookToArray() {
    const book = new Book(bookname.value, author.value, page.value, status21.value);
    bookArray.push(book);
}

open.addEventListener('click', function() {
    dialog.showModal();
});

close.addEventListener('click', function() {
    dialog.close();
});

add.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents form submission
    if (bookname.value && author.value && page.value) { // Checks if fields are filled
        addBooks();
        dialog.close();
        bookname.value = ""; // Clear inputs for next entry
        author.value = "";
        page.value = "";
        status21.value = "read";
    }
});
