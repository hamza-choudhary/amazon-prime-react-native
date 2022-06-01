import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import MovieDetailScreen from '../screens/MovieDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
		</Stack.Navigator>
	)
}

export default HomeStack

const styles = StyleSheet.create({})
