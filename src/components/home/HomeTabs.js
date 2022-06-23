import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const HomeTabs = ({ onSetTabActive, active }) => {
	const homeTabHandler = () => {
		onSetTabActive({ home: true })
	}
	const tvShowTabHandler = () => {
		onSetTabActive({ tv: true })
	}
	const movieTabHandler = () => {
		onSetTabActive({ movies: true })
	}
	const kidTabHandler = () => {
		onSetTabActive({ kids: true })
	}

	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Image
					style={styles.logoImg}
					source={require('../../../assets/prime-logo.png')}
				/>
			</View>
			<View style={styles.tabs}>
				<TouchableOpacity style={[styles.tabItem, active.home && styles.active]} onPress={homeTabHandler}>
					<View>
						<Text style={[styles.text, active.home && styles.activeTxt]}>
							Home
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.tabItem, active.tv && styles.active]} onPress={tvShowTabHandler}>
					<View>
						<Text style={[styles.text, active.tv && styles.activeTxt]}>
							TV Shows
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.tabItem, active.movies && styles.active]} onPress={movieTabHandler}>
					<View>
						<Text style={[styles.text, active.movies && styles.activeTxt]}>
							Movies
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.tabItem, active.kids && styles.active]} onPress={kidTabHandler}>
					<View>
						<Text style={[styles.text, active.kids && styles.activeTxt]}>
							Kids
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default HomeTabs

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
	},
	logoImg: {
		width: 80,
		height: 80,
	},
	tabs: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		marginBottom: 5,
	},
	tabItem: {
		flex: 1,
		paddingBottom: 10,
		alignItems: 'center',
	},
	text: {
		color: '#ccc',
	},
	active: {
		borderBottomColor: '#fff',
		borderBottomWidth: 2,
	},
	activeTxt: {
		color: '#fff',
	},
})
