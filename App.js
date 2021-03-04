import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import TaskScreen from "./src/screens/TaskScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Task: TaskScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tarefas"
    }
  }
);

export default createAppContainer(navigator);
