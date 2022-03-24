import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../../styles';
import Disclaimer from '../text/Disclaimer';
import TextButton from '../buttons/TextButton';
import P from '../text/P';
import { useNavigation } from '@react-navigation/native';

const AuthContainer = ({ children, redirect }) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				display: 'flex',
				flex: 1,
				backgroundColor: 'white',
			}}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				// style={styles.container}
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100%',
				}}>
				<View style={styles.container}>
					{children}
					<Disclaimer>
						By proceeding you agree to the Terms and Conditions and Provacy
						Policy of IdentriX.
					</Disclaimer>

					<View style={styles.containerTwo}>
						<P>
							{redirect == 'login' ? 'New to IdentriX' : 'Already Registered'}?
						</P>
						<TextButton onPress={() => navigation.navigate(redirect)}>
							{redirect}
						</TextButton>
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerTwo: {
		display: 'flex',
		flexDirection: 'row',
		marginVertical: 32,
	},
	social: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 16,
	},
	socialButton: {
		minWidth: 300,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 44,
		borderWidth: 2,
		borderColor: 'black',
		marginVertical: 4,
		borderRadius: 30,
		flexDirection: 'row',
	},
	socialButtonText: {
		fontWeight: '700',
		marginLeft: 16,
	},
});

export default AuthContainer;
