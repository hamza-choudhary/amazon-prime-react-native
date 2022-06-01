import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImgCard = (props) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.img}
				source={{
					uri: `${props.uri}`,
				}}
			/>
			<Text style={styles.name}>{props.name}</Text>
		</View>
	)
}

export default ImgCard

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		width: 100,
		borderRadius: 5,
		overflow: 'hidden', //very important
	},
	name: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 5,
		color: '#fff',
	},
	img: {
		resizeMode: 'stretch',
		height: 140,
	},
})
