// const initialState = { //не нужен тк инициализация в функциях
//     bookList: {
//         books: [],
//         loading: true,
//         error: null,
//     },
//     shoppingCart: {
//         cartItems: [],
//         orderTotal: 0
//     }   
// };
import updateShoppingCart from './shopping-cart';
import updateBookList from './book-list';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;

// const reducer = (state, action) => {
//     // console.log('', action.type )
//     switch (action.type) {
//         case 'FETCH_BOOKS_REQUEST':
//         case 'FETCH_BOOKS_SUCCESS':
//         case 'FETCH_BOOKS_FAILURE':
//             return {
//                 ...state,
//                 bookList: updateBookList(state, action)
//             }
//         case 'BOOK_ADD_TO_CART':
//         case 'BOOK_REMOVED_FROM_CART':
//         case 'ALL_BOOKS_REMOVED_FROM_CART':
//             return {
//                 ...state,
//                 shoppingCart: updateShoppingCart(state, action)
//             }
//         default: 
//             return state; 
//     };
// };
