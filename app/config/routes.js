import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigation: {
        header: {},
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      mode: 'modal',
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
