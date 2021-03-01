import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './App.css'
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    } ,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Robinhood Clone',
    },
  }
);

export default createAppContainer(navigator);
