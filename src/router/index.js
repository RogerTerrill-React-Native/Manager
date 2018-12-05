import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import TestForm from '../components/Test';

const RootStack = createStackNavigator(
  {
    Home: LoginForm,
    Test: TestForm
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);


class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;
