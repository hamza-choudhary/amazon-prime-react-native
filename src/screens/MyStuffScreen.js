import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const MyStuffScreen = () => {
	const navigation = useNavigation()

	const navigateHandler = () => {
		navigation.navigate('SettingsScreen')
	}
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'flex-start',
					margin: 10,
					alignItems: 'center',
				}}
			>
				<View>
					<FontAwesome name="user-circle-o" size={40} color="grey" />
				</View>
				<View style={{ marginLeft: 5 }}>
					<Text style={styles.text1}>Abdul Rahman</Text>
				</View>
				<View>
					<AntDesign name="down" size={20} color="grey" />
				</View>
				<TouchableOpacity
					onPress={navigateHandler}
					style={{
						marginLeft: '40%',
						alignSelf: 'center',
					}}
				>
					<AntDesign name="setting" size={24} color="grey" />
				</TouchableOpacity>
			</View>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					borderBottomColor: 'white',
				}}
			>
				<Text style={styles.text1}>Watchlist</Text>
			</View>
			<View
				style={{
					flex: 2,
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'flex-end',
				}}
			>
				<Ionicons name="browsers" size={50} color="darkgrey" />
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.text}>Browse now, watch later </Text>
					<Text style={styles.text2}>
						Your Watchlist is shared across all of your devices
					</Text>
				</View>
			</View>
			{/* <View>
			</View> */}
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 6,
		flexDirection: 'column',
	},
	text1: {
		color: 'white',
		fontSize: 15,
	},
	text2: {
		color: '#ccc',
		fontSize: 12,
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default MyStuffScreen
