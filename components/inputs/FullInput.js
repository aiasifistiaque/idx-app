import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../../styles';

const FullInput = props => {
	return <TextInput {...props} editable maxLength={40} style={styles.input} />;
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 0.3,
		borderColor: colors.border,
		height: 44,
		width: '100%',
		paddingHorizontal: 16,
		borderRadius: 30,
		marginVertical: 8,
		backgroundColor: colors.smoke,
	},
});

export default FullInput;
