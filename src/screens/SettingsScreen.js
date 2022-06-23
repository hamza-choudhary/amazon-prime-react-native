import { StyleSheet, Text, View, ScrollView } from 'react-native'

const ListItem = ({ mainHeading, paragraph }) => {
	return (
		<View style={styles.liContainer}>
			<Text style={styles.heading}>{mainHeading}</Text>
			<Text style={styles.text}>{paragraph}</Text>
		</View>
	)
}

const SettingsScreen = () => {
	return (
		<ScrollView>
			<Text
				style={{
					color: '#fff',
					fontSize: 20,
					textAlign: 'center',
					fontWeight: 'bold',
					margin: 15,
					marginBottom: 35,
				}}
			>
				Settings Screen
			</Text>
			<ListItem
				mainHeading="Stream & Download"
				paragraph="Manage quality and Wi-Fi"
			/>
			<ListItem mainHeading="Notifications" paragraph="on" />
			<ListItem
				mainHeading="Auto Play"
				paragraph="Play the next episode automatically"
			/>
			<ListItem
				mainHeading="Parental Control"
				paragraph="Control what you can watch"
			/>
			<ListItem
				mainHeading="Registered devices"
				paragraph="See all registered devices"
			/>
			<ListItem mainHeading="Clear video search history" paragraph="" />
			<ListItem
				mainHeading="Signed in as Abdul Rahman"
				paragraph="Sign out of all Amazon apps"
			/>
			<ListItem
				mainHeading="Manage Account"
				paragraph="Access membership information and payment methods"
			/>
			<ListItem mainHeading="Hidden videos" paragraph="" />
			<ListItem mainHeading="Language" paragraph="English" />
			<ListItem mainHeading="Help & Feedback" paragraph="" />
			<ListItem mainHeading="About & Legal" paragraph="" />
		</ScrollView>
	)
}

export default SettingsScreen

const styles = StyleSheet.create({
	liContainer: {
		marginHorizontal: 10,
		padding: 13,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	heading: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold',
	},
	text: {
		color: '#ccc',
		fontSize: 12,
	},
})
