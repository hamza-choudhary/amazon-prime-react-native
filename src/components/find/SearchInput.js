import { StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SearchInput = () => {
	return (
		<View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder="Search by actor, title..."
        underlineColorAndroid="transparent"
        placeholderTextColor="#fff"
      />
			<AntDesign
				style={styles.searchIcon}
				name="search1"
				size={24}
				color="#fff"
			/>
		</View>
	)
}

export default SearchInput

const styles = StyleSheet.create({
	searchSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0F2C3E',
		marginVertical: 20,
	},
	searchIcon: {
		padding: 10,
    paddingRight: 20,
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		backgroundColor: '#0F2C3E',
		color: '#fff',
    fontSize: 17,
	},
})
