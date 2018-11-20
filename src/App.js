import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
