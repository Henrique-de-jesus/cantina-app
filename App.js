import AdminScreen from './screens/AdminScreen'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import ForgotScreen from './screens/ForgotScreen';
import CodigoForgot from './screens/CodigoForgot';
import RedefinirSenha from './screens/RedefinirSenha';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
          <Stack.Screen name="CodigoForgot" component={CodigoForgot} />
          <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}