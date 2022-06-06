import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BrowseBy = () => {
	return (
		<View>
			<Text style={styles.heading}>Browse by</Text>
			<View style={styles.cardContainer}>
				<View>
					<Text style={[styles.text, { top: '50%', left: '43%' }]}>TV</Text>
					<View style={styles.card}></View>
				</View>
				<View>
					<Text style={[styles.text, { top: '50%', left: '36%' }]}>Movies</Text>
					<View style={styles.card}></View>
				</View>
				<View>
					<Text style={[styles.text, { top: '50%', left: '15%' }]}>
						Amazon Originals
					</Text>
					<View style={styles.card}></View>
				</View>
				<View>
					<Text style={[styles.text, { top: '50%', left: '40%' }]}>Kids</Text>
					<View style={styles.card}></View>
				</View>
			</View>
		</View>
	)
}

export default BrowseBy

const styles = StyleSheet.create({
	heading: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		paddingLeft: 12,
	},
	text: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
	},
	cardContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	card: {
		padding: 50,
		opacity: 0.2,
		width: 150,
		backgroundColor: '#ccc',
		marginHorizontal: 10,
	},
})
