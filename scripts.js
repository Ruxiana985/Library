const open=document.getElementById('openDialog');
const close=document.getElementById('closeDialog');
const dialog=document.getElementById('dialog');
const cards=document.querySelector('.grid-cards');

const title=document.getElementById('title');
const author=document.getElementById('author');
const page=document.getElementById('page-numbers');
const status21=document.getElementById('status');

const bookArray=[];


function Book(title,author,pagenum,status){
    this.title=title;
    this.author=author;
    this.pagenum=pagenum;
    this.status=status;

}


function addBooks(){
    const newCard=document.createElement('div');
    newCard.classList.add('book-I');
    cards.appendChild(newCard);

    
     

};

function addBookToArray(){
    const book= new Book(title.value, author.value, page.value, status21.value);
    bookArray.push(book);
    

};

open.addEventListener('click', function(){
    dialog.showModal();
    close.addEventListener('click',function(){
        dialog.close();
    });
});

