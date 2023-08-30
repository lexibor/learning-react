import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList()
{
    return (
        <section>
            <Book />
        </section>
    )
}

const Book = () =>
{
    return(
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <h2>Image Placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));