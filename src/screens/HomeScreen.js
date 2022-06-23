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
				'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg',
		},
		{
			id: 2,
			imgUri:
				'https://www.whoa.in/20131111-Whoa/hollywood-movie-the-dark-knight-movie-poster.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://media1.popsugar-assets.com/files/thumbor/i8izfiQnzOSNAWN7Fc1AgJg1R1Y/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/07/25/699/n/1922283/06adea33772b2923_MCDONUP_EC176/i/Once-Upon-Time-Hollywood-Movie-Posters.jpg',
		},
	]
	return (
		<>
			<MovieCarousel data={TV_CAROUSEL_DATA} />
			<MovieList heading={'Comedy TV'} data={Movie_Data_3} />
			<MovieList heading={'TV shows we think you\' like'} data={Movie_Data_2} />
			<MovieList heading={'Kids & Family movies'} data={Movie_Data_2} />
			<MovieList heading={'Top TV'} data={Movie_Data_1} />
			<MovieList heading={'Crime TV'} data={Movie_Data_2} />
			<MovieList heading={'Thriler movies'} data={Movie_Data_3} />
			<MovieList heading={'Horror movies'} data={Movie_Data_1} />
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
				'https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg',
		},
		{
			id: 2,
			imgUri:
				'https://static.toiimg.com/thumb/msid-91069719,width-219,height-317,imgsize-38574/91069719.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://w0.peakpx.com/wallpaper/196/795/HD-wallpaper-justice-league-sc-action-dc-hbo-hollywood-justice-league-movie-poster-warner-warner-bros.jpg',
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
				'https://s.movieinsider.com/images/p/614122_m1637276521.jpg',
		},
		{
			id: 2,
			imgUri:
				'https://s2.r29static.com/bin/entry/8f8/x/1339737/image.jpg',
		},
		{
			id: 3,
			imgUri:
				'https://s3.r29static.com/bin/entry/016/x/1339736/image.jpg',
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
