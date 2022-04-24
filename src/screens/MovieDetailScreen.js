import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Options from '../components/movieDetail/Options'
import { MaterialIcons } from '@expo/vector-icons'

const MovieDetailScreen = () => {
	return (
		<>
			<View>
				<Image style={styles.cover} source={{ uri: 'uri.com' }} />
			</View>

			<Text style={styles.prime}>prime</Text>
			<Text style={styles.primeTxt}>Watch for $0.00 with Prime</Text>

			<TouchableOpacity style={styles.button}>
				<Text style={{ fontWeight: '400', color: '#000' }}>
					Watch with Prime
				</Text>
				<Text style={{fontSize: 11}}>Start your 7-day free trial</Text>
			</TouchableOpacity>

			<Options />

			<View style={styles.description}>
				<Text style={{ ...styles.whiteTxt, marginVertical: 4 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					nulla ipsum necessitatibus ex in ipsa animi dolores aperiam, maiores
					quae eum a numquam amet distinctio laboriosam. Nesciunt inventore sed
					delectus.
				</Text>
				{/* //!props */}
				<Text style={{ ...styles.greyTxt, marginVertical: 4 }}>IMBD 8.5</Text>

				<View style={{ ...styles.featureContainer, marginVertical: 4 }}>
					<Text style={styles.greyTxt}>2018 87min</Text>
					<View style={styles.feature}>
						<Text style={styles.featureTxt}>18+</Text>
					</View>
					<View style={styles.feature}>
						<Text style={styles.featureTxt}>4k UHD</Text>
					</View>
					<View style={styles.feature}>
						<Text style={styles.featureTxt}>AD</Text>
					</View>
					<MaterialIcons name="comment" size={18} color="#55636E" />
				</View>

				<Text style={styles.greyTxt}>
					Languages: Audio(4), Subtitles (19){' '}
					<MaterialIcons name="keyboard-arrow-down" size={18} color="#55636E" />
				</Text>
			</View>
		</>
	)
}

export default MovieDetailScreen

const styles = StyleSheet.create({
  primeTxt: {
    color: '#ccc',
    fontSize: 11,
    margin: 20,

  },
  button: {
    marginBottom: 8,
    marginHorizontal: 20,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FFA624',
    borderRadius: 5,
  },
	description: {
		marginHorizontal: 20,
		marginVertical: 3,
	},
	whiteTxt: {
		color: '#ccc',
	},
	greyTxt: {
		color: '#55636E',
	},
	featureContainer: {
		flexDirection: 'row',
		color: '#55636E',
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
})
