import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import HomeTabs from '../components/home/HomeTabs'
import Carousel from '../components/home/Carousel'
import MovieList from '../components/home/MovieList'

const DUMMY_IMAGES = [
	{
		id: 1,
		uri: 'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg',
	},
	{
		id: 2,
		uri: 'https://upload.wikimedia.org/wikipedia/en/c/c2/The_Vow_Poster.jpg',
	},
	{
		id: 3,
		uri: 'https://posterspy.com/wp-content/uploads/2021/12/batman4-1-1500x2122.jpg',
	},
	{
		id: 4,
		uri: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
	},
	{
		id: 5,
		uri: 'https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg',
	},
]

const HomeScreen = () => {
	return (
		<>
			<HomeTabs />
			<Carousel />

			<MovieList heading={'Amazon Originals'} data={DUMMY_IMAGES} />
			<MovieList heading={'Top movies'} data={DUMMY_IMAGES} />
			<MovieList heading={'Drama movies'} data={DUMMY_IMAGES} />
			<MovieList heading={'Drama movies'} data={DUMMY_IMAGES} />
			<MovieList heading={'Drama movies'} data={DUMMY_IMAGES} />
		</>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
