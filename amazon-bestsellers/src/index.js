import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const title = "Iron Flame (The Empyrean, 2)";
const author = "Rebecca Yarros";
const img = "./images/book-1.jpg";

function BookList()
{
    return (
        <section className='booklist'>
            <Book job="developer" />
            <Book title="random title" number={22}/>
        </section>
    )
}

const Book = (props) =>
{
    console.log(props);
    
    return(
        <article className='book'>
            <img src={img} alt={title} />

            <h2>{title}</h2>

            <h4>{author}</h4>

            <p>{props.job}</p>
            <p>{props.title}</p>
            
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