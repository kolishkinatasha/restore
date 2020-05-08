import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={'Корзина'}/>
            <Switch> {/* следит чтобы только один роутер сработал */}
                <Route path='/'
                component={HomePage}
                exact /> {/* exact - только точчне совпадение c path */}

                <Route path='/cart'
                component={CartPage} />
            </Switch>
        </main>
        )
};

export default App;