import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import { colors } from '../../styles';

const LabeledInput = props => {
	return (
		<>
			<Text style={{ marginTop: 16, marginBottom: 4, fontWeight: '600' }}>
				{props.label}
			</Text>
			<TextInput
				{...props}
				editable
				style={{
					borderWidth: 1,
					borderColor: colors.primaryLight,
					minHeight: props.multiline ? 300 : 44,
					width: 300,
					paddingHorizontal: 16,
					paddingVertical: props.multiline ? 16 : 0,
					borderRadius: 30,
					marginBottom: 8,
					backgroundColor: colors.white,
					width: '100%',
					display: 'flex',
				}}
			/>
		</>
	);
};

export default LabeledInput;
