import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScren from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListSceen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScren,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
