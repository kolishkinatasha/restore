//отвечает за отлисовку однго элемента списка книг
import React from 'react';
import './book-list-item.css';

const BookListItem = ({book, onAddToCart}) => {

    const {title, author, price, coverImage} = book;
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='coverImage'/>
            </div>
            <div className='book-details' >
                <span href='#' className='book-title'>{title}</span>
                <div className='book-author'>{author}</div>
                <div className='book-price'>${price}</div>
                <button 
                onClick={onAddToCart}
                className='btn btn-info add-to-cart'>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default BookListItem;