//oтвечает за отрисовку списка книг

import React, { Component } from 'react';
import './book-list.css';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux'; //для подключения компонента к стору// по сути она создаёт новый компонент
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddToCart} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { bindActionCreators } from 'redux';

const BookList = ({books, onAddToCart}) => {
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (<li key={book.id}>
                        <BookListItem 
                        book={book} 
                        onAddToCart={() => onAddToCart(book.id)}/>
                    </li>)
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        // //получить данные
        // const {bookstoreService, 
        //     booksLoaded, 
        //     booksRequested, 
        //     booksError} = this.props;
        // booksRequested();
        // bookstoreService.getBooks() //возвращает промис
        //     .then((data) => booksLoaded(data))
        //     .catch((err) => booksError(err));
        // //передать действие в стор
        // // this.props.booksLoaded(data);

        this.props.fetchBooks();

    };

    render() {
        const {books, loading, error, onAddToCart}  = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddToCart={onAddToCart}/>
    };
};

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => { //ownProps сожержит свойства перешедшие из connect
    const {bookstoreService} = ownProps;
    return bindActionCreators({
        // fetchBooks: fetchBooks(dispatch, bookstoreService),
        fetchBooks: fetchBooks(bookstoreService),
        onAddToCart: bookAddToCart
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList)); //вернет компонент умеющий работать со стором