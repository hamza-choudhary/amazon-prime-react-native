import { StyleSheet, StatusBar } from 'react-native'
import MovieCarousel from './src/components/UI/MovieCarousel'
import Routes from './src/navigation/Routes'


const App = () => {
	return (
		<>
			<StatusBar backgroundColor={'#000'} />
			<Routes />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#0E171E',
	},
})

export default App
