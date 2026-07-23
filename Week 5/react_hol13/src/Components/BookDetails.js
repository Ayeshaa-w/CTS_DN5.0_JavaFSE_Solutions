import React from "react";

function BookDetails() {

    const books = [
        { id: 1, name: "React", price: 550 },
        { id: 2, name: "Spring Boot", price: 650 },
        { id: 3, name: "Java", price: 450 }
    ];

    if (books.length === 0) {
        return null;
    }

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {
                    books.map(book => (

                        <li key={book.id}>
                            {book.name} - ₹{book.price}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default BookDetails;