import { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import HomeTabs from '../components/home/HomeTabs'
import MovieList from '../components/home/MovieList'
import { Movie_Data_1, Movie_Data_2, Movie_Data_3 } from '../../data'
import MovieCarousel from '../components/UI/MovieCarousel'

const HomeScreen = () => {
	const [tabActive, setTabActive] = useState({ home: true })
	return (
		<ScrollView>
			<HomeTabs active={tabActive} onSetTabActive={setTabActive} />
			{tabActive.home && <Home />}
			{tabActive.tv && <TV />}
			{tabActive.movies && <Movies />}
			{tabActive.kids && <Kids />}
		</ScrollView>
	)
}

const Home = () => {
	const HOME_CAROUSEL_DATA = [
		{
			id: 1,
			imgUri:
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x',
		},
		{
			id: 2,
			imgUri:
				'https://upload.wikimedia.org/wikipedia/en/a/a0/Meri_Pyaari_Bindu.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637404.jpg',
		},
	]
	return (
		<>
			<MovieCarousel data={HOME_CAROUSEL_DATA} />
			<MovieList heading={'Amazon Originals'} data={Movie_Data_2} />
			<MovieList heading={'Top movies'} data={Movie_Data_3} />
			<MovieList heading={'Romantic movies'} data={Movie_Data_1} />
			<MovieList heading={'Comedy movies'} data={Movie_Data_2} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Crime movies'} data={Movie_Data_3} />
			<MovieList heading={'Action & Adventure movies'} data={Movie_Data_1} />
		</>
	)
}
const TV = () => {
	const TV_CAROUSEL_DATA = [
		{
			id: 1,
			imgUri:
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x',
		},
		{
			id: 2,
			imgUri:
				'https://upload.wikimedia.org/wikipedia/en/a/a0/Meri_Pyaari_Bindu.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637404.jpg',
		},
	]
	return (
		<>
			<MovieCarousel data={TV_CAROUSEL_DATA} />
			<MovieList heading={'Top movies'} data={Movie_Data_3} />
			<MovieList heading={'Amazon Originals'} data={Movie_Data_2} />
			<MovieList heading={'Romantic movies'} data={Movie_Data_1} />
			<MovieList heading={'Comedy movies'} data={Movie_Data_2} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Crime movies'} data={Movie_Data_3} />
			<MovieList heading={'Action & Adventure movies'} data={Movie_Data_1} />
		</>
	)
}
const Movies = () => {
	const MOVIES_CAROUSEL_DATA = [
		{
			id: 1,
			imgUri:
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x',
		},
		{
			id: 2,
			imgUri:
				'https://upload.wikimedia.org/wikipedia/en/a/a0/Meri_Pyaari_Bindu.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637404.jpg',
		},
	]
	return (
		<>
			<MovieCarousel data={MOVIES_CAROUSEL_DATA} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Amazon Originals'} data={Movie_Data_2} />
			<MovieList heading={'Top movies'} data={Movie_Data_3} />
			<MovieList heading={'Romantic movies'} data={Movie_Data_1} />
			<MovieList heading={'Comedy movies'} data={Movie_Data_2} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Crime movies'} data={Movie_Data_3} />
			<MovieList heading={'Action & Adventure movies'} data={Movie_Data_1} />
		</>
	)
}
const Kids = () => {
	const KIDS_CAROUSEL_DATA = [
		{
			id: 1,
			imgUri:
				'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDUBv_iHQkErMkhfMKpklqUN5bo01oetTAvEo8RbZ2BJ-s6O1x',
		},
		{
			id: 2,
			imgUri:
				'https://upload.wikimedia.org/wikipedia/en/a/a0/Meri_Pyaari_Bindu.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/74637404.jpg',
		},
	]
	return (
		<>
			<MovieCarousel data={KIDS_CAROUSEL_DATA} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Amazon Originals'} data={Movie_Data_2} />
			<MovieList heading={'Top movies'} data={Movie_Data_3} />
			<MovieList heading={'Romantic movies'} data={Movie_Data_1} />
			<MovieList heading={'Comedy movies'} data={Movie_Data_2} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
			<MovieList heading={'Crime movies'} data={Movie_Data_3} />
			<MovieList heading={'Action & Adventure movies'} data={Movie_Data_1} />
		</>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})
