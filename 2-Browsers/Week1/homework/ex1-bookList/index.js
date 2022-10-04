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
  const bookList = document.getElementById('bookList');

  const bookUl = document.createElement('ul');

  bookUl.setAttribute('class', 'ul-line');

  const bookImage1 = document.createElement('img');
  const bookImage2 = document.createElement('img');
  const bookImage3 = document.createElement('img');

  bookImage1.src = '../ex1-bookList/assets/the_design_of_everyday_things.jpg';
  bookImage1.setAttribute('alt', 'img1');
  bookImage2.src = '../ex1-bookList/assets/the_most_human_human.jpg';
  bookImage2.setAttribute('alt', 'img2');
  bookImage3.src = '../ex1-bookList/assets/the_pragmatic_programmer.jpg';
  bookImage3.setAttribute('alt', 'img3');

  for (let i = 0; i < books.length; i++) {
    const bookLi = document.createElement('li');
    bookLi.setAttribute('class', 'li');
    const bookP = document.createElement('p');
    bookP.textContent = `${books[i].title} - ${books[i].author}`;

    if (books[i].title === 'The Design of Everyday Things') {
      bookP.appendChild(bookImage1);
    } else if (books[i].title === 'The Most Human Human') {
      bookP.appendChild(bookImage2);
    } else {
      bookP.appendChild(bookImage3);
    }
    bookLi.appendChild(bookP);

    if (books[i].alreadyRead) {
      bookP.style.background = 'green';
    } else {
      bookP.style.background = 'red';
    }
    bookUl.appendChild(bookLi);
  }

  bookList.appendChild(bookUl);
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
