import { StyleSheet, Text, View,ScrollView } from 'react-native'
import BrowseBy from '../components/find/BrowseBy'
import CategoryLI from '../components/find/CategoryLI'
import SearchInput from '../components/find/SearchInput'

const FindScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<SearchInput/>
      <BrowseBy />
			{/* Genres */}
			<View style={{ marginVertical: 20 }}>
				<Text style={styles.heading}>Genres</Text>
				<CategoryLI text={'Action and adventure'} />
				<CategoryLI text={'Comedy'} />
				<CategoryLI text={'Drama'} />
				<CategoryLI text={'Documentary'} />
				<CategoryLI text={'Kids and family'} />
				<Text style={{ fontSize: 15, color: '#6F9EC9', marginVertical: 10 }}>
					See more
				</Text>
			</View>
			{/* Categories */}
			<View style={{ marginVertical: 20 }}>
				<Text style={styles.heading}>Categories</Text>
				<CategoryLI text={'Recently added movies'} />
				<CategoryLI text={'Recently added TV'} />
				<CategoryLI text={'Top movies'} />
				<CategoryLI text={'Top TV'} />
				<CategoryLI text={'Available to download'} />
			</View>
		</ScrollView>
	)
}

export default FindScreen

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
  heading: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 12,
  }
})
