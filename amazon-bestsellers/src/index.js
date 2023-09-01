import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const firstBook =
{
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: './images/book-1.jpg'
}

const secondBook =
{
    author: 'Keila Shaheen',
    title: 'The Shadow Work Journal',
    img: './images/book-2.jpg'
}


function BookList()
{
    return (
        <section className='booklist'>
            <Book 
            author={firstBook.author} 
            title={firstBook.title} 
            img={firstBook.img} 
            />

            <Book 
            author={secondBook.author}
             title={secondBook.title} 
             img={secondBook.img} 
             />

        </section>
    )
}

const Book = (props) =>
{
    console.log(props);
    const { img, title, author } = props;
    
    return(
        <article className='book'>
            <img src={img} alt={title} />

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