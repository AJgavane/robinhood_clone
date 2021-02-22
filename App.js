import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import './App.css'
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Robinhood Clone',
    },
  }
);

export default createAppContainer(navigator);
