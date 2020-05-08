//позволит передать сервис всем компонентам используя контекст апи реакта
import React from 'react';

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
};