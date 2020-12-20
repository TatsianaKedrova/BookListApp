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
        <td><a href = "#" class = "btn btn-danger btn-sm delete>X</a></td>
        `;

        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#number').value = '';

    }
}
//Store Class: handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (event) => {

//Prevent actual submit
event.preventDefault();

    //Get form value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const number = document.querySelector('#number').value;

    //Instantiate book
    const book = new Book(title, author, number);
    console.log(book);

    //Add book to UI
    UI.addBookToList(book);

    //Clear fields in UI
    UI.clearFields();
});
//Event: Remove a book




















