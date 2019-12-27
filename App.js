import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScren from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListSceen'
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScren,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen, 
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'App'
    }
  }
);

export default createAppContainer(navigator);
