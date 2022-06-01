import {
	Image,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	ScrollView,
} from 'react-native'
import { useState } from 'react'
import Options from '../components/movieDetail/MovieOptions'
import Description from '../components/movieDetail/MovieDescription'
import MovieTitle from '../components/movieDetail/MovieTitle'
import MovieRelated from '../components/movieDetail/MovieRelated'
import MoreDetails from '../components/movieDetail/MoreDetails'

const MovieDetailScreen = (props) => {
	const data = props.route.params.data
	const [myTab, setMyTab] = useState(false)

	return (
		<ScrollView>
			<View>
				<Image
					style={styles.cover}
					source={{
						uri: data.imgUri,
					}}
				/>
			</View>
			<View style={styles.container}>
				<MovieTitle title={data.title} />
				<Options />
				<Description
					summary={data.summary}
					rating={data.rating}
					runtime={data.runtime}
				/>
			</View>

			<View style={styles.movieTabs}>
				<TouchableWithoutFeedback onPress={() => setMyTab(false)}>
					<View style={[styles.tab, !myTab ? styles.activeTab : null]}>
						<Text style={[styles.txt, !myTab ? styles.activeTxt : null]}>
							Related
						</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => setMyTab(true)}>
					<View style={[styles.tab, myTab ? styles.activeTab : null]}>
						<Text style={[styles.txt, myTab ? styles.activeTxt : null]}>
							More Details
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>

			{!myTab ? (
				<MovieRelated
					title={data.title}
					cast={data.cast}
					director={data.director.name}
				/>
			) : (
				<MoreDetails
					cast={data.cast}
					genres={data.genres}
					director={data.director.name}
				/>
			)}
		</ScrollView>
	)
}

export default MovieDetailScreen

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
	cover: {
		resizeMode: 'stretch',
		height: 230,
	},
	movieTabs: {
		flexDirection: 'row',
		marginVertical: 20,
		borderBottomColor: '#55636E',
		borderBottomWidth: 1,
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	activeTab: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 2,
	},
	txt: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#55636E',
	},
	activeTxt: {
		color: '#ccc',
	},
})
