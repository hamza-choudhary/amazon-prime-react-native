import { StyleSheet, Text, View, Image } from 'react-native'

const HomeTabs = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Image style={styles.logoImg} source={require('../../../assets/prime-logo.png')} />
			</View>
			<View style={styles.tabs}>
				<View style={{ ...styles.tabItem, ...styles.active }}>
					<Text style={{ ...styles.text, ...styles.activeTxt }}>Home</Text>
				</View>
				<View style={styles.tabItem}>
					<Text style={styles.text}>TV Shows</Text>
				</View>
				<View style={styles.tabItem}>
					<Text style={styles.text}>Movies</Text>
				</View>
				<View style={styles.tabItem}>
					<Text style={styles.text}>Kids</Text>
				</View>
			</View>
		</View>
	)
}

export default HomeTabs

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center'
	},
	logoImg: {
		width: 80,
		height: 80,
	},
	tabs: {
		flexDirection: 'row',
		paddingHorizontal: 20,
	},
	tabItem: {
		flex: 1,
		paddingBottom: 10,
		alignItems: 'center',
	},
	text: {
		color: '#ccc',
	},
	active: {
		borderBottomColor: '#fff',
		borderBottomWidth: 2,
	},
	activeTxt: {
		color: '#fff',
	},
})
