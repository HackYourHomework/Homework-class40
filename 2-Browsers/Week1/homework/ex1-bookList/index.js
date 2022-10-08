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
  const bookList = document.querySelector('#bookList');

  const defaultBook = 'Read this book';
  books.forEach((book) => {
    const { title, author, alreadyRead, image } = book;

    // creation of ul ===========
    const ul = document.createElement('ul');
    bookList.appendChild(ul);
    alreadyRead
      ? ul.setAttribute('class', 'container ')
      : ul.setAttribute('class', 'container red');
    // ===============

    // creation of img / li / ===================
    const li = document.createElement('li');
    ul.appendChild(li);
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('alt', title);

    li.textContent = title ? `${title} by :   ${author} ` : defaultBook;
    li.appendChild(img);

    // ==============================

    const checkRead = () => {
      alert('YOU READ THE BOOK');
    };
    const notRead = () => {
      alert('YOU DID NOT READ THE BOOK');
    };

    alreadyRead
      ? ul.addEventListener('click', checkRead)
      : ul.addEventListener('click', notRead);
  });
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      image: './assets/the_design_of_everyday_things.jpg',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      image: './assets/the_most_human_human.jpg',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      image: './assets/the_pragmatic_programmer.jpg',
      alreadyRead: true,
    },
  ];
  return myBooks;
}
createBookList(main());

window.addEventListener('load', main);
