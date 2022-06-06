import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import BottomTabs from './BottomTabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MyTheme = {
	dark: false,
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#0E171E',
	},
}

const Routes = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="Main" component={BottomTabs} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
