//Book Class: represent a book
class Book {
    constructor(title, author, number) {
        this.title = title;
        this.author = author;
        this.number = number;
    }
}
//UIClass: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'John Doe',
                number: '3434434'
            },
            {
                title: 'Book two',
                author: 'Jane Doe',
                number: '45545'
            }
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete></a></td>
        `;

        list.appendChild(row);
    }
}
//Store Class: handles Storage

//Event: Display Books

//Event: Add a book

//Event: Remove a book
console.log(books)



















