import React, { useEffect, useState } from "react";
import { fetchBooks } from '../../api/api';
import BookSection from "../common/sections/BookSection";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [books, setBooks] = useState([]); 


    useEffect(() => {
        const getBooks = async () => {

            try {
                const response = await fetchBooks();
                setBooks(response);
            } catch (error) {
                console.log(error);
            }
        };

        getBooks();
    }, []);   

    return (
        <div>
            <section>
                <div className="container text-center">
                    <h1>Welcome to Book Store!</h1>
                    <p>Expand your knowledge with inspiring true stories and expert advice.....</p>
                </div>
            </section>

            <section>
                <h2 className="text-center mb-4">All Books</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <BookSection books={books} />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
