import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RootStack = createStackNavigator(
  {
    Home: LoginForm,
    EmpList: EmployeeList
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default Router;
