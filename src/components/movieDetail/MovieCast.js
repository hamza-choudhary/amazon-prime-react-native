import { StyleSheet, Text, View, FlatList } from 'react-native'
import CastCard from '../UI/CastCard'


const MovieCast = (props) => {
	return (
		<View>
			<Text style={styles.heading}>Cast & Crew</Text>

			<View style={{ ...styles.featureContainer, marginVertical: 4 }}>
				<Text style={{ color: '#55636E' }}>Details from</Text>
				<View style={styles.feature}>
					<Text style={styles.featureTxt}>IMbD</Text>
				</View>
			</View>

			<View style={styles.cast}>
				{props.cast.map((item) => (
					<CastCard uri={item.imgUri} name={item.name} key={item.name} />
				))}
			</View>

			<View style={styles.director}>
				<CastCard
					uri={'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'}
					name=''
				/>
				<View style={{ marginLeft: 10 }}>
					<Text style={{ color: '#ccc', fontSize: 14 }}>Director</Text>
					<Text style={{ color: '#55636E' }}>Known for {props.title}</Text>
				</View>
			</View>
		</View>
	)
}

export default MovieCast

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
	},
	featureContainer: {
		flexDirection: 'row',
	},
	feature: {
		paddingHorizontal: 5,
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#55636E',
		borderRadius: 2,
		marginHorizontal: 5,
	},
	featureTxt: {
		fontSize: 10,
		color: '#55636E',
	},
	cast: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	director: {
		flexDirection: 'row',
		borderTopColor: '#ccc',
		borderTopWidth: 1,
		paddingTop: 20,
		marginTop: 10,
	},
})
