import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ImgCard = (props) => {

	const navigation = useNavigation()

	const navigateHandler = ()=> {
		navigation.navigate('MovieDetailScreen', {data: props.data})
	}

	// console.log(props.data)

	return (
		<TouchableWithoutFeedback onPress={navigateHandler}>
			<View style={styles.container}>
				<Image
					style={styles.img}
					source={{
						uri: `${props.data.imgUri}`,
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ImgCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 8,
		marginRight: 8,
		width: 160,
		borderRadius: 8,
		overflow: 'hidden', //very important
	},
	img: {
		resizeMode: 'stretch',
		height: 100,
		width:160,
		flex:1,
	},
})
