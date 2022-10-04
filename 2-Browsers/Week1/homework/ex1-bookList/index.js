//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // TODO your code goes in here, return the ul element
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      image:'https://static-01.daraz.com.bd/p/87eb91feea0ce70a5aac0d6393f2be70.png',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      image: 'https://images.penguinrandomhouse.com/cover/9780307879158',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      image:'https://miro.medium.com/max/669/1*-5dJrfabvA6K4oMIpy-rLg.png',
      alreadyRead: true,
    },
  ];


  const bookList = document.querySelector('#bookList');


  myBooks.map(book => {

const {title,author,isbn,alreadyRead,image,} = book;

// creation of P && span tags=========
let p = document.createElement('p');
p.textContent= `book :  ${title}`;
let span = document.createElement('span');
span.textContent= `author :   ${author} `;
p.appendChild(span)

// ============================

// creation of ul ===========
let ul = document.createElement('ul');
bookList.appendChild(ul);
alreadyRead ? ul.setAttribute('class', 'container ') : ul.setAttribute('class', 'container red');
// ===============

// creation of img / li / ===================
let li = document.createElement('li');
ul.appendChild(li);
let img = document.createElement('img');
img.setAttribute('src',image)
li.appendChild(img);
ul.appendChild(p);
// ==============================

const checkRead = () => {
alert('YOU READ THE BOOK')
}
const NotRead = () => {
alert('YOU DID NOT READ THE BOOK')
}

alreadyRead ? ul.addEventListener('click',checkRead ) : ul.addEventListener('click',NotRead)


  })

}

window.addEventListener('load', main);
