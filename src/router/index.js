import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from '../components/LoginForm';

const RootStack = createStackNavigator(
  {
    Home: LoginForm
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
