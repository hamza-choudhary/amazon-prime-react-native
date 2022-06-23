import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const MovieTitle = (props) => {
	return (
		<>
			<Text style={styles.title}>{props.title}</Text>

			<Text style={styles.prime}>prime</Text>
			<Text style={styles.primeTxt}>Watch for $0.00 with Prime</Text>

			<TouchableOpacity style={styles.button}>
				<Text style={{ fontWeight: '400', color: '#000' }}>
					Watch with Prime
				</Text>
			</TouchableOpacity>
		</>
	)
}

export default MovieTitle

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fff',
		marginVertical: 10,
	},
	prime: {
		color: '#189FCD',
		fontSize: 20,
		fontWeight: 'bold',
	},
	primeTxt: {
		color: '#ccc',
		fontSize: 12,
		marginTop: 5,
		marginBottom: 20,
	},
	button: {
		marginBottom: 8,
		padding: 15,
		alignItems: 'center',
		backgroundColor: '#FFA624',
		borderRadius: 5,
	},
})
