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
  const ul = document.createElement('ul');
  document.getElementById('bookList').appendChild(ul);
  ul.setAttribute('style', 'display: flex; list-style: none;');
  books.forEach((book) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('style', 'width: 15%; margin: 2%; padding: 2%');
    li.style.background = book.alreadyRead ? 'green' : 'red';
    const p = document.createElement('p');
    li.appendChild(p);
    p.textContent = `${book.title} - ${book.author}`;
    const img = document.createElement('img');
    li.appendChild(img);
    img.alt = `${book.title} image`;
    img.src = `${setUrl()}`;
    function setUrl() {
      let url;
      switch (book.isbn) {
        case '978-0465050659':
          url = './assets/the_design_of_everyday_things.jpg';
          break;
        case '978-1617933431':
          url = './assets/the_most_human_human.jpg';
          break;
        case '978-0201616224':
          url = './assets/the_pragmatic_programmer.jpg';
          break;
      }
      return url;
    }
    img.style.width = '80%';
  });

  return ul;
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
  document.querySelector('ul').appendChild(ulElement);
}

window.addEventListener('load', main);
