import { StyleSheet, Text, View } from 'react-native'
import MovieList from '../home/MovieList'
import MovieCast from './MovieCast'
import { Movie_Data_3 } from '../../../data'

const MovieRelated = (props) => {
	return (
		<>
			<MovieList data={Movie_Data_3} heading={'Customers also Watched'} />
			<View style={{ marginLeft: 20, marginRight: 10 }}>
				<MovieCast title={props.title} cast={props.cast} director={props.director} />
			</View>
		</>
	)
}

export default MovieRelated

