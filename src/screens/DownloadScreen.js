import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DownloadScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.h2, { fontWeight: 'bold' }]}>Downloads</Text>

			<Image
				style={styles.img}
				source={require('../../assets/default-download.png')}
			/>

			<Text style={[styles.h2, { marginTop: 50 }]}>No Videos downloaded</Text>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{ color: '#fff' }}>Auto Downloads: On . </Text>
				<Text style={{ color: '#1B7CB8' }}> Manage</Text>
			</View>
		</View>
	)
}

export default DownloadScreen

const styles = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	h2: {
		fontSize: 17,
		color: '#fff',
	},
	img: {
		marginTop: '30%',
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
})
