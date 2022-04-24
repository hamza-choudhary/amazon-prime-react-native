import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Navigation = () => {
	return (
		<View style={styles.nav}>
			<View style={styles.navItem}>
				<AntDesign name="home" size={24} color="#fff" />
				<Text style={styles.text}>Home</Text>
			</View>
			<View style={styles.navItem}>
				<AntDesign name="search1" size={24} color="#fff" />
				<Text style={styles.text}>Find</Text>
			</View>
			<View style={styles.navItem}>
				<AntDesign name="download" size={24} color="#fff" />
				<Text style={styles.text}>Downloads</Text>
			</View>
			<View style={styles.navItem}>
				<AntDesign name="home" size={24} color="#fff" />
				<Text style={styles.text}>My Stuff</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	nav: {
		position: 'relative',
		width: '100%',
		bottom: 0,
		padding: 5,
		backgroundColor: 'blue',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	navItem: {
		alignItems: 'center',
	},
	text: {
		color: '#fff',
	},
})

export default Navigation
