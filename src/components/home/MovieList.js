import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ImgCard from '../UI/ImgCard'

const MovieList = (props) => {
	return (
		
		<View style={styles.container}>
			<View style={styles.heading}>
				<Text style={styles.headingTxt}>{props.heading}</Text>
				<MaterialCommunityIcons name="greater-than" size={16} color="#ccc" />
			</View>
			<View>
				<FlatList
					data={props.data}
					renderItem={({ item }) => <ImgCard uri={item.uri} />}
					keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.theList}
				/>
			</View>
		</View>
	)
}

export default MovieList

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	heading: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
	},
	headingTxt: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},

  theList: {
    paddingLeft: 16,
  }
})
