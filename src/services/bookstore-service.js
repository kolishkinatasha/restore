export default class BookstoreService {

    data = [
        { 
         id: 1,
         title: 'Books name 1',
         author: 'Author 1',
         price: 32,
         coverImage: 'https://media.proglib.io/wp-uploads/-000//1/1012145650.jpg',
        },
        { 
         id: 2,
         title: 'Books name 2',
         author: 'Author  2',
         price: 43,
         coverImage: 'https://media.proglib.io/wp-uploads/-000//1/08716001.cover_max1500.jpg',
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => { //resolve когда получили данные, reject когда плучена ошибка
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('bad news'))
                } else {
                    resolve(this.data)
                }
            }, 700);
        });
    };
};