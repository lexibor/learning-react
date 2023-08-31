import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList()
{
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () =>
{
    const title = "Iron Flame (The Empyrean, 2)";
    const author = "Rebecca Yarros";
    return(
        <article className='book'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg" alt="Iron Flame (The Empyrean, 2)" />

            <h2>{title}</h2>

            <h4>{author}</h4>
        </article>
    );
};

// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg" alt="Iron Flame (The Empyrean, 2)" />;
// const Title = () => <h2>Iron Flame (The Empyrean, 2)</h2>;
// const Author = () => 
// {
//     const inlineHeadingStyles = 
//     {
//         color: '#617d98', 
//         fontSize:'0.75rem', 
//         marginTop:'0.5rem'
//     }
//     return (
//     <h4 style={inlineHeadingStyles}>
//         Rebecca Yarros
//         </h4>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)