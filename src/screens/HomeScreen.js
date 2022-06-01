import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import HomeTabs from '../components/home/HomeTabs'
import Carousel from '../components/home/Carousel'
import MovieList from '../components/home/MovieList'
import {Movie_Data_1, Movie_Data_2, Movie_Data_3} from '../../data'


const HomeScreen = () => {
	return (
		<ScrollView>
			<HomeTabs />
			<Carousel />

			<MovieList heading={'Amazon Originals'} data={Movie_Data_1} />
			<MovieList heading={'Top movies'} data={Movie_Data_2} />
			<MovieList heading={'Action & Adventure movies'} data={Movie_Data_3} />
			<MovieList heading={'Romantic movies'} data={Movie_Data_1} />
			<MovieList heading={'Comedy movies'} data={Movie_Data_2} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Crime movies'} data={Movie_Data_3} />
		</ScrollView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
