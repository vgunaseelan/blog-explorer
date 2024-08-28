import React from "react";

const BookSection = ({books}) => {

    return (
        <>
            {books.map((book, index) => (
                <div className="col" key={index}>
                <div className="card shadow-sm h-100">
                    <img
                        src={book.coverImage} 
                        className="card-img-top p-3" 
                        alt={book.title} 
                        style={{ maxHeight: "250px", objectFit: "cover", borderRadius: "10px" }} 
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-truncate">{book.title}</h5>
                        <p className="card-text"> {book.genre} <br /> by {book.author}</p>
                        <div className="mt-auto">
                            <button type="button" className="btn btn-primary w-100">View Book</button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default BookSection;