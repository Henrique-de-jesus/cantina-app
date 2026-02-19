import AdminScreen from './screens/AdminScreen'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ForgotScreen from './screens/ForgotScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}