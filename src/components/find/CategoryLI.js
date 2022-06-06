import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const CategoryLI = ({ text }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			<FontAwesome5 name="greater-than" size={20} color="#fff" />
		</View>
	)
}

export default CategoryLI

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomWidth: .6,
		borderBottomColor: '#ccc',
    alignItems: 'center',
    paddingRight: 25,
	},
	text: {
		fontSize: 17,
    padding: 12,
		color: '#74848F',
	},
})
