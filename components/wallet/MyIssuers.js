import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import * as lib from '../../lib/constants';
import citi from '../../assets/issuers/citi.png';
import fedex from '../../assets/issuers/fedex.png';
import govt from '../../assets/issuers/govt.png';
import hsbc from '../../assets/issuers/hsbc.png';
import tata from '../../assets/issuers/tata.png';
import warwick from '../../assets/issuers/warwick.png';
import Section from '../util/Section';
import { H4, H5, P } from '../text';

const data = [citi, tata, fedex, govt, hsbc, warwick];

const MyIssuers = () => {
	return (
		<Section mv={16}>
			<Section
				row
				justify='space-between'
				align='center'
				style={{ width: '100%' }}>
				<H5>Issuers</H5>
				<P color={lib.colors.light} size={12}>
					Show All
				</P>
			</Section>
			<Section row mv={4}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{data.map((item, i) => (
						<TouchableOpacity
							key={i}
							style={{
								display: 'flex',
								width: 80,
								height: 80,
								...lib.styles.container,
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: 8,
							}}>
							<Image
								source={item}
								style={{ width: 50, resizeMode: 'contain' }}
							/>
						</TouchableOpacity>
					))}
				</ScrollView>
			</Section>
		</Section>
	);
};

export default MyIssuers;
