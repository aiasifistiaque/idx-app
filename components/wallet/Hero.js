import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo-white.png';
import { H3, H4, P } from '../text';
import * as lib from '../../lib/constants';
import { Entypo } from '@expo/vector-icons';
import Section from '../util/Section';

const Hero = () => {
	return (
		<LinearGradient
			end={{ x: 1, y: 0.6 }}
			colors={['#DDCCED', '#8F9FF6', '#94B3F0']}
			style={styles.background}>
			<Section row>
				<Image source={logo} style={{ height: 48, width: 48 }} />
				<View style={styles.text}>
					<H4 size={32} weight='800' color='white'>
						IDentriX
					</H4>
					<P weight='600' size={10} color='white'>
						ONE PLACE FOR ALL YOUR CREDENTIALS
					</P>
				</View>
			</Section>
			<View
				style={{
					height: 0.5,
					width: '100%',
					backgroundColor: 'rgba(255,255,255,.3)',
					marginVertical: 12,
				}}
			/>
			<Section row justify='space-between' align='center'>
				<Section flex={3}>
					<P color='white' weight='500' size={14}>
						Total Balance
					</P>
					<Section row justify='space-between' align='center' mt={-4}>
						<Section row>
							<H3 color='white'>2612.20</H3>
							<H3 size={12} color='black' lineHeight={32}>
								{` IDX`}
							</H3>
						</Section>

						<View style={styles.percentContainer}>
							<Entypo name='triangle-up' size={20} color={lib.colors.success} />
							<P size={12} weight='700' color={lib.colors.success}>
								10%
							</P>
						</View>
					</Section>
				</Section>
			</Section>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	background: {
		width: '100%',
		borderRadius: 30,
		display: 'flex',
		padding: 24,
		paddingVertical: 24,
		marginTop: 16,
	},
	text: {
		marginHorizontal: 16,
		display: 'flex',
	},
	percentContainer: {
		backgroundColor: 'white',
		padding: 4,
		borderRadius: 30,
		paddingHorizontal: 8,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default Hero;
