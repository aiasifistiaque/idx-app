import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Section from '../util/Section';
import useGetMyDetails from '../../hooks/useGetMyDetails';
import { H5 } from '../text';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyDetails = () => {
	const { data, loading, error } = useGetMyDetails();
	const navigation = useNavigation();
	return (
		<Section row mt={16} ml={4} justify='space-between' align='center'>
			<H5>
				Hi, {loading ? '...' : data?.name ? data.name.split(' ')[0] : '...'}
			</H5>
			<Section row justify={'flex-end'} align={'center'}>
				<TouchableOpacity
					style={styles.icon}
					onPress={() => navigation.navigate('Scanner')}>
					<Ionicons name='scan' size={22} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<Ionicons name='information-circle-outline' size={22} color='black' />
				</TouchableOpacity>
			</Section>
		</Section>
	);
};

const styles = StyleSheet.create({
	icon: { paddingHorizontal: 8, paddingVertical: 4 },
});

export default MyDetails;
