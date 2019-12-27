import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScren from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListSceen'
import ImageScreen from './src/screens/ImageScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScren,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'App'
    }
  }
);

export default createAppContainer(navigator);
