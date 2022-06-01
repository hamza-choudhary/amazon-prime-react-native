import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Description = (props) => {
	return (
		<View style={styles.description}>
			<Text style={{ ...styles.whiteTxt, marginVertical: 4 }}>
				{props.summary}
			</Text>
			<Text style={{ ...styles.greyTxt, marginVertical: 4 }}>IMBD {props.rating}</Text>

			<View style={{ ...styles.featureContainer, marginVertical: 4 }}>
				<Text style={styles.greyTxt}>{props.runtime}</Text>
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
	)
}

export default Description

const styles = StyleSheet.create({
	description: {
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
		// color: '#55636E',
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
