import { useState, useContext } from 'react'
import {
	View,
	Text,
	ScrollView,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import AuthContext from '../store/auth-context'

const LoginScreen = () => {
	const [isChecked, setChecked] = useState(false)

  const navigation = useNavigation()
	const authCtx = useContext(AuthContext)

	const loginHandler = () => {
		authCtx.onLogin()
    navigation.navigate('Main')
	}

	return (
		<View style={styles.mainContainer}>
			<ScrollView>
				<View style={styles.header}>
					<Image
						source={require('../../assets/prime-logo.png')}
						style={styles.logo}
					/>
				</View>

				<View style={styles.signInContainer}>
					<Text style={styles.signInHeading}>Sign in</Text>
					<Text style={styles.forgotPassword}>Forgot password?</Text>
				</View>

				<View style={{ alignItems: 'stretch' }}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="E-mail (phone for mobile accounts)"
							style={[styles.inputField, styles.emailInput]}
						/>
						<TextInput
							secureTextEntry={true}
							placeholderTextColor="#838383"
							placeholder="Amazon password"
							style={[styles.inputField, styles.pswdInput]}
						/>
					</View>
				</View>
				<View style={styles.section}>
					<Checkbox
						style={styles.checkbox}
						value={isChecked}
						onValueChange={() => setChecked(() => !isChecked)}
					/>
					<Text style={styles.paragraph}>Show password</Text>
				</View>

				<TouchableOpacity style={styles.btn} onPress={loginHandler}>
					<Text style={styles.signInText}>Sign In</Text>
				</TouchableOpacity>

				<View style={styles.newToAmznContainer}>
					<View style={styles.borderSeparator} />
					<Text style={{ margin: 10, textAlign: 'center', color: '#000' }}>
						New to Amazon
					</Text>
					<View style={styles.borderSeparator} />
				</View>

				<TouchableOpacity
					style={[
						styles.btn,
						{ backgroundColor: '#EBECF0', borderColor: '#ccc', borderWidth: 1 },
					]}
				>
					<Text style={{ textAlign: 'center', color: '#000' }}>
						Create a new Amazon account
					</Text>
				</TouchableOpacity>

				<Text style={{ margin: 20, color: '#000' }}>
					By signing in you are agreeeing to our terms listed in the
					<Text style={{ color: '#09d' }}> Legal Information section</Text> and
					our
					<Text style={{ color: '#09d' }}> Privacy Notice</Text>
				</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#F6F6F6',
	},
	header: {
		resizeMode: 'contain',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		alignItems: 'center',
	},
	signInContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 14,
	},
	signInHeading: {
		color: '#000',
		textAlign: 'left',
		fontSize: 30,
		fontWeight: 'bold',
	},
	forgotPassword: {
		textAlign: 'right',
		color: '#09d',
		fontSize: 15,
	},
	inputContainer: { alignItems: 'center', justifyContent: 'center' },
	checkbox: {
		margin: 8,
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 20,
	},
	paragraph: {
		fontSize: 15,
		color: '#000',
	},

	inputField: {
		backgroundColor: '#fff',
		width: 320,
		height: 50,
		borderWidth: 1.3,
		borderColor: '#C2C2C2',
		color: '#000',
		padding: 15,
	},
	emailInput: {
		borderBottomWidth: 0.3,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
	},
	pswdInput: {
		borderTopWidth: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
	},
	btn: {
		backgroundColor: ' rgba(235,163,6,1) ',
		padding: 5,
		borderRadius: 3,
		margin: 20,
		paddingBottom: 20,
		paddingTop: 15,
	},
	signInText: {
		textAlign: 'center',
		color: '#fff',
	},
	newToAmznContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
	},
	borderSeparator: {
		width: '20%',
		height: 0.7,
		backgroundColor: '#666',
		margin: 10,
	},
})

export default LoginScreen
