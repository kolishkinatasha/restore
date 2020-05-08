import React from 'react';
import BookListContainer from '../book-list'; //уже обернут connect 

const HomePage = () => {
    return (
        <div>
           <BookListContainer /> 
        </div>  
    );
};

export default HomePage;