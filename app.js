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
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.number}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();

        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        //Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#number').value = '';

    }


}
//Store Class: handles Storage
class Store {
     static getBooks(){
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
     }

     static addBook(book) {
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
     }

     static removeBook(number) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.number === number) {
                books.splice(index, 1);
            }
            
     });
     localStorage.setItem('books', JSON.stringify(books));
}

}

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

    //Validate
    if(title === "" || author === "" || number === "") {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        //Instantiate book
    const book = new Book(title, author, number);
    console.log(book);

    //Add book to UI
    UI.addBookToList(book);

    //Add book to store
    Store.addBook(book);

    //Show success message
    UI.showAlert('Book Added to the table', 'success');

    //Clear fields in UI
    UI.clearFields();
    }
});
//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (event) =>
{
    //Remove book from UI
    UI.deleteBook(event.target);

    //Remove book from store
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

    //Show success message for deleting a boom
    UI.showAlert('Book Removed', 'success');
});



















