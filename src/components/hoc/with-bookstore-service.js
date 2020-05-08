//упрощаем работу с BookstoreServiceConsumer
//функция возвращает функцию, принимающую компонент который оборачиваем(Wrapped)
import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {/* передаём рендер ф-цию, которая примет 
                за своё значение сервис, который мы 
                передадим через контекст */}
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} 
                        bookstoreService={bookstoreService}/>);
                    }
                }
            </BookstoreServiceConsumer>
        );
    };
};

export default withBookstoreService;