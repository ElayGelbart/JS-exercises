class Booklist {
  constructor(nextBook, currentBook, lastBook, allBooks) {
    this.numBookRead = (() => {
      let num = 0
      for (let value of allBooks) {
        if (value.read) { num++ }
      }
      return num;
    })();
    this.numBookNotRead = (() => {
      let num = 0
      for (let value of allBooks) {
        if (!value.read) {
          num++
        }
      }
      return num;
    })();
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.allBooks = allBooks;
  }
  add(book) {
    this.allBooks.push(book);
  }
  finishCurrentBook() {
    this.currentBook.read = true;
    this.currentBook.readDate = Date.now();
    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;
    this.numBookRead++;
    this.numBookNotRead--;
    this.nextBook = (() => {
      for (let value of this.allBooks) {
        if (!value.read) {
          return value;
        }
      }
    })();
  }
}
class Book {
  constructor(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}
const alchemist = new Book('The Alchemist', 'Drama', 'Paulo Coelho', true, new Date("5/6/21"));
const bible = new Book('The Bible', 'Fiction', 'Man', false)
const cacther = new Book('Catcher in the Ray', 'Drama', 'J.D.Salinger', false);
const harryPoter = new Book('Harry Potter', 'Fantazy', 'J.K.Rolling', false);
const newland = new Book('Newland', 'Roman', 'Eshkol Nevo', true, new Date("2/1/20"))
const allElayBooks = [alchemist, cacther, harryPoter, newland, bible]
const elayReadingList = new Booklist(harryPoter, cacther, alchemist, allElayBooks);
elayReadingList.finishCurrentBook();
console.log(elayReadingList);