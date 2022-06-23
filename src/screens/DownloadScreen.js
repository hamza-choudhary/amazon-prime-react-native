import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const DownloadScreen = () => {
	return (
		<View style={styles.container}>
			<View
				style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}
			>
				<Text style={styles.download}>Downloads</Text>
			</View>
			<View
				style={{
					flex: 2,
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'flex-end',
				}}
			>
				<MaterialCommunityIcons
					name="download-box-outline"
					size={50}
					color="white"
				/>
			</View>
			<View style={styles.container2}>
				<Text style={styles.text1}>No videos downloaded</Text>
			</View>
			<View
				style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}
			>
				<View>
					<Text style={{ color: 'white' }}>Auto Downloads:</Text>
				</View>
				<View>
					<Text style={styles.text1}>On .</Text>
				</View>
				<View>
					<Text style={{ color: 'royalblue' }}> Manage</Text>
				</View>
			</View>
			<View style={{ flex: 1.5 }}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 5,
	},
	container2: {
		flexDirection: 'column',
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text1: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 15,
	},
	download: {
		color: 'white',
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default DownloadScreen
