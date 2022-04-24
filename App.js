import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'

import HomeScreen from './src/screens/HomeScreen'
import Navigation from './src/components/UI/Navigation'
import MovieDetailScreen from './src/screens/MovieDetailScreen'

const App = () => {
	return (
		<>
			<StatusBar backgroundColor={'#000'} />
			<ScrollView style={styles.container}>
				{/* <HomeScreen /> */}
				<MovieDetailScreen/>
			</ScrollView>
			<Navigation />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#0E171E',
	},
})

export default App
