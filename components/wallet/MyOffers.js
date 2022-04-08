import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import car from '../../assets/carloan.png';
import home from '../../assets/homeloan.png';
import Section from '../util/Section';
import { P } from '../text';
import * as lib from '../../lib/constants';
import H6 from '../text/H6';

const data = [
	{
		title: 'Car Insurance',
		image: car,
		to: '',
	},
	{
		title: 'Home Loans',
		image: home,
		to: '',
	},
];

const MyOffers = () => {
	const { colors } = lib;
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={{ marginBottom: 16 }}>
			<Section row>
				{data.map((item, i) => (
					<Section
						key={i}
						row
						mr={8}
						style={{
							...lib.styles.container,
							paddingHorizontal: 16,
							paddingVertical: 8,
						}}>
						<Section mr={16}>
							<H6 color={colors.textLight}>{item.title}</H6>
							<TouchableOpacity style={styles.button}>
								<P size={12} color='white'>
									Apply Now
								</P>
							</TouchableOpacity>
						</Section>
						<Image
							source={item.image}
							style={{ height: 100, width: 100, resizeMode: 'contain' }}
						/>
					</Section>
				))}
			</Section>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: lib.colors.light,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		paddingHorizontal: 12,
		marginTop: 24,
	},
});

export default MyOffers;
