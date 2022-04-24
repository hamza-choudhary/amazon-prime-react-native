import { StyleSheet, Text, View, Image } from 'react-native'

const Carousel = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.carousel}
				source={{
					uri: 'https://cdn.vox-cdn.com/thumbor/lrWUWxut9C3oLOgF6ZM96wQsiHk=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66353841/1-friends.0.0.jpg'
				}}
			/>
		</View>
	)
}

export default Carousel

const styles = StyleSheet.create({
	container: {},
	carousel: {
    height: 180,
    resizeMode: 'stretch'
  },
})
