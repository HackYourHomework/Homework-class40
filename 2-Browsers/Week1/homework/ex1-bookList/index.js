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
  const bookList = document.createElement('ul');
  const myDiv = document.getElementById('bookList');
  myDiv.appendChild(bookList);
  bookList.style.cssText =
    'width:90% ; text-align: center ;  list-style:none;  margin:auto; ';
  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookList.appendChild(bookItem);
    bookItem.style.cssText =
      'border: 2px solid black ; display: inline-block ; width:30% ; padding :25px ; margin: 0 20px; ';
    bookItem.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    const paragraphText = document.createElement('p');
    bookItem.appendChild(paragraphText);
    paragraphText.textContent = `${book.title} - ${book.author}`;
    paragraphText.style.cssText = 'margin-bottom:20px';

    const image = document.createElement('img');
    bookItem.appendChild(image);
    if (book.title === 'The Design of Everyday Things') {
      image.src = 'assets/the_design_of_everyday_things.jpg';
    }
    if (book.title === 'The Most Human Human') {
      image.src = 'assets/the_most_human_human.jpg';
    }
    if (book.title === 'The Pragmatic Programmer') {
      image.src = 'assets/the_pragmatic_programmer.jpg';
    }
    image.style.cssText = 'width:90% ; height:300px';
    image.alt = `${book.title} image`;
  });
  return bookList;
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
