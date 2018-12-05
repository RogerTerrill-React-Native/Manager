import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAFpLEUhr52PkWDwNzII7A6Jfa3JnC1lgg',
      authDomain: 'manager-c8242.firebaseapp.com',
      databaseURL: 'https://manager-c8242.firebaseio.com',
      projectId: 'manager-c8242',
      storageBucket: 'manager-c8242.appspot.com',
      messagingSenderId: '865260910334'
    });
  }

  render() {
    // reducer, initial states, middleware(store enhancer)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
