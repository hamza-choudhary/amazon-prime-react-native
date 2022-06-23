import { StyleSheet, Text, View } from 'react-native'
import MyStuffScreen from '../screens/MyStuffScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const SettingsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="MyStuffScreen" component={MyStuffScreen} />
			<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
		</Stack.Navigator>
	)
}

export default SettingsStack

const styles = StyleSheet.create({})
