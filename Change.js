import { StackNavigator } from 'react-navigation'
import MainScreen from './MainScreen'
import SecondView from './SecondView'

const App = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Main',
        }
    },
    Second: {
        screen: SecondView,
        navigationOptions: {
            title: 'SecondView',
        }
    },
});
export default App;



