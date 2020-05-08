import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

//middleware модифицирует только работу диспатч, вызываются по цепочке
//вместо state {detState, dispatch}
const logMiddleware = (store) => (dispatch) => (action) => { // для получения доступа к функциям стор => способ получить существующий диспатч, кот мы меняем => возвращаемое значени
    console.log(action.type, store.getState());
    return dispatch(action);
}

const stringMiddleware = () => (dispatch) => (action) => { //аналогичное написание
    if (typeof action === 'string') {
        return dispatch({
            type: action
        })
    }
    return dispatch(action);
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

// const myAction = (dispatch) => { //thunkMiddleware позвоняет этой ф-ции сработать
//     setTimeout(() => dispatch({
//         type: 'ЗАДЕРЖКА'
//     }), 2000)
// };
//иначе можно создать экшн креэйтер:
const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'ЗАДЕРЖКА'
    }), timeout)
}

store.dispatch(delayedActionCreator(3000));

// --------enhancer это ф-ция принимающая createStore и возвращает её новую версию

// const stringEnhancer = (createStore) => (...arg) => { // так же для строк
//     const store = createStore(...arg);
//     const ordinaryDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return ordinaryDispatch({
//                 type: action
//             })
//         }
    
//         return ordinaryDispatch(action);
//     }
//     return store
// };

// const logEnhancer = (createStore) => (...arg) => { // для вывода в консоль каждого события
//     const store = createStore(...arg);
//     const ordinaryDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type)
//         return ordinaryDispatch(action);
//     }
//     return store
// };

// const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

// // ----------если экшн передался как строка, чтобы он её принимал :
// // const store = createStore(reducer)
// // const ordinaryDispatch = store.dispatch;
// // store.dispatch = (action) => {
// //     if (typeof action === 'string') {
// //         return ordinaryDispatch({
// //             type: action
// //         })
// //     }

// //     return ordinaryDispatch();
// // } выше описано тоже самое используя инструмент редакс

store.dispatch('передали строку')

export default store;

//чтобы не писать widdleware npm i redux-thunk, позволяет использовать функции в качестве действий