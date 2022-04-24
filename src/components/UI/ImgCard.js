import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImgCard = (props) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.img}
				source={{
          uri: `${props.uri}`
				}}
			/>
		</View>
	)
}

export default ImgCard

const styles = StyleSheet.create({
	container: {
    flex: 1,
		marginHorizontal: 5,
		marginVertical: 8,
		marginHorizontal: 5,
		width: 150,
    borderRadius: 8,
    overflow: 'hidden' //very important
	},
	img: {
    resizeMode: 'stretch',
		height: 85,
	},
})
