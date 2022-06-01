import { StyleSheet, Text, View } from 'react-native'

const Detail = (props) => {
	return (
		<View style={styles.details}>
			<Text style={styles.heading}>{props.heading}</Text>
			<Text style={styles.content}>{props.children}</Text>
		</View>
	)
}

const MoreDetails = (props) => {
	return (
		<View style={styles.container}>
			<Detail heading="Genres">{props.genres}</Detail>
			<Detail heading="Directors">{props.director}</Detail>
			<Detail heading="Starring">
				{props.cast[0].name} {props.cast[1].name} {props.cast[2].name}
			</Detail>
			<Detail heading="Supporting Actors">Anant Nag, Vasishta N.Simha</Detail>
			<Detail heading="Studios"> HombaleFilms</Detail>
			<Detail heading="Maturity rating">13+</Detail>
			<Detail heading="Content advisory">
				alcohol use, smoking, violence, foul language
			</Detail>
			<Detail heading="Viewing rights">
				Prime Video titles are available for watching by tapping Watch now if
				you're an Amazon Prime member. Some Prime video titles are also ...
			</Detail>

			<View style={{ ...styles.reviews, marginTop: 50 }}>
				<Text style={styles.h1}>Customer Reviews</Text>
				<Text style={styles.whiteTxt}>We dont have any customer reviews</Text>
			</View>
			<View style={{ ...styles.reviews, marginBottom: 50 }}>
				<Text style={styles.h1}>Did you Know?</Text>
				<Text style={styles.whiteTxt}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit
					assumenda doloribus saepe, illum blanditiis nobis, doloremque odio
					accusamus harum reprehenderit repellat explicabo quo rem aspernatur
					perspiciatis dolores inventore corporis.
				</Text>
			</View>
		</View>
	)
}

export default MoreDetails

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
	details: {
		paddingVertical: 16,
		borderBottomColor: '#55636E',
		borderBottomWidth: 1,
	},
	heading: {
		fontWeight: 'bold',
		color: '#ccc',
		marginBottom: 4,
	},
	content: {
		color: '#55636E',
	},
	reviews: {
		marginVertical: 25,
	},
	whiteTxt: {
		color: '#fff',
	},
	h1: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 10,
	},
})
