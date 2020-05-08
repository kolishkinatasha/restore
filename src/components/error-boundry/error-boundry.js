//класс так как нужет метод жизненного цикла componentdidcatch

// import React from 'react';
import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() { 
//сработает если в одном из компонентов ниже по иерархии выскочит ошибка в методе render или каком-то другом
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
           return  <ErrorIndicator/>
        } 

        return this.props.children;
    }
};