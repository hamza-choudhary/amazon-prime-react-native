import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import FindScreen from '../screens/FindScreen'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import DownloadScreen from '../screens/DownloadScreen'
import MyStuffScreen from '../screens/MyStuffScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SettingsStack from './SettingsStack'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<AntDesign
							name="home"
							size={22}
							color={`${focused ? '#1B7CB8' : '#ccc'}`}
						/>
					),
				}}
				name="HomeScreenStack"
				component={HomeStack}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Find',
					tabBarIcon: ({ focused }) => (
						<AntDesign
							name="search1"
							size={22}
							color={`${focused ? '#1B7CB8' : '#ccc'}`}
					 	/>
					),
				}}
				name="FindScreen"
				component={FindScreen}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Download',
					tabBarIcon: ({ focused }) => (
						<AntDesign
							name="download"
							size={22}
							color={`${focused ? '#1B7CB8' : '#ccc'}`}
						/>
					),
				}}
				name="DownloadScreen"
				component={DownloadScreen}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'My Stuff',
					tabBarIcon: ({ focused }) => (
						<FontAwesome
							name="user-circle-o"
							size={22}
							color={`${focused ? '#1B7CB8' : '#ccc'}`}
						/>
					),
				}}
				name="SettingsStack"
				component={SettingsStack}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabs
