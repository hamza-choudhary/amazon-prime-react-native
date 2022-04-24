import { StyleSheet, Text, View } from 'react-native'
import {
	Ionicons,
	MaterialCommunityIcons,
	Entypo,
	AntDesign,
} from '@expo/vector-icons'

const Options = () => {
	return (
		<View style={styles.container}>
			<View style={styles.option}>
				<Ionicons name="play-outline" size={24} color="#ccc" />
			</View>
			<View style={styles.option}>
				<Entypo name="plus" size={24} color="#ccc" />
			</View>
			<View style={styles.option}>
				<MaterialCommunityIcons name="party-popper" size={24} color="#ccc" />
			</View>
			<View style={styles.option}>
				<AntDesign name="sharealt" size={24} color="#ccc" />
			</View>
		</View>
	)
}

export default Options

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: 15,
		marginVertical: 30,
	},
	option: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#ccc',
		borderWidth: 2,
	},
})
