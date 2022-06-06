import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

const MovieCarousel = ({ data }) => {
	return (
		<View>
			<FlatList
				data={data}
        keyExtractor={(item)=> item.id}
        horizontal
				renderItem={({ item }) => (
            <Image style={styles.carouselImg} source={{ uri: item.imgUri }} />
				)}
			/>
		</View>
	)
}

export default MovieCarousel

const styles = StyleSheet.create({
	carouselImg: {
    resizeMode: 'stretch',
		width: 360,
		height: 250,
	},
})
