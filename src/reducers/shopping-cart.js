const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) { //удаление из массива
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    };

    if (idx === - 1) { //новый элемент
        return [
            ...cartItems,
            item
        ];
    }; 

    return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: {books}, shoppingCart: {cartItems} } = state;
    const book = books.find((book) => book.id === bookId);        
    const itemIndex = cartItems.findIndex(({id}) => id === bookId) //ищем индекс элемента у которого id такое же как у книги
    let item = cartItems[itemIndex]; //ищем сам эл-т, если индекс меньше на 1 то вернет indefined

    const newItem = updateCartItem(book, item, quantity)
    return {
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: 0
    }; 
};


const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADD_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload); // элемент с айди который надо удалить
            return updateOrder(state, action.payload, -item.count) //уменьшаем на количество книг в корзине
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;