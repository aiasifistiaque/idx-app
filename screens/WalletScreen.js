import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import React from 'react';
import { H4, H5, P } from '../components/text';
import {
	FontAwesome,
	Feather,
	SimpleLineIcons,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo-white.png';

const dimentions = { color: '#56CCF2', size: 28 };
const optioDimention = { color: 'black', size: 28 };

const options = [
	{
		component: (
			<MaterialCommunityIcons
				name='arrow-collapse-down'
				size={optioDimention.size}
				color={'#56CCF2'}
			/>
		),
		title: 'Receive',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='share-alt'
				size={optioDimention.size}
				color={'#AB7FFB'}
			/>
		),
		title: 'Share',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='copy-outline'
				size={optioDimention.size}
				color={'#878787'}
			/>
		),
		title: 'Copy',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='options'
				size={optioDimention.size}
				color={'#878787'}
			/>
		),
		title: 'More',
		to: '',
	},
];

const data = [
	{
		component: (
			<FontAwesome
				name='user-o'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Personal',
		to: '',
	},
	{
		component: (
			<Feather name='key' size={dimentions.size} color={dimentions.color} />
		),
		title: 'Assets',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='graduation'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Educaction',
		to: '',
	},
	{
		component: (
			<Feather
				name='credit-card'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'License',
		to: '',
	},
	{
		component: (
			<MaterialCommunityIcons
				name='hospital'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Healthcare',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='cart-outline'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Bills',
		to: '',
	},
	{
		component: (
			<Feather name='award' size={dimentions.size} color={dimentions.color} />
		),
		title: 'Certificates',
		to: '',
	},
	{
		component: (
			<MaterialCommunityIcons
				name='web'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Web Credentials',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='briefcase'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Jobs',
		to: '',
	},
	{
		component: (
			<FontAwesome
				name='dollar'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Loans',
		to: '',
	},
	{
		component: (
			<Ionicons
				name='shield-checkmark-outline'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Insurance',
		to: '',
	},
	{
		component: (
			<SimpleLineIcons
				name='login'
				size={dimentions.size}
				color={dimentions.color}
			/>
		),
		title: 'Sign Up & Login',
		to: '',
	},
];

const WalletScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.main}>
			<ScrollView style={styles.page}>
				<LinearGradient
					// Background Linear Gradient
					end={{ x: 1, y: 0.6 }}
					colors={['#DDCCED', '#8F9FF6', '#94B3F0']}
					style={styles.background}>
					<Image source={logo} style={{ height: 48, width: 48 }} />
					<View
						style={{
							marginHorizontal: 16,
							display: 'flex',
						}}>
						<H4
							style={{ color: 'whitesmoke', fontWeight: '800', fontSize: 32 }}>
							IDentriX
						</H4>
						<P
							style={{
								color: 'whitesmoke',
								fontWeight: '600',
								fontSize: 12,
								marginTop: -2,
							}}>
							One Place for all your credentials
						</P>
					</View>
				</LinearGradient>
				<View style={styles.options}>
					{options.map((item, i) => (
						<View key={i} style={styles.optionsIconContainer}>
							<TouchableOpacity style={styles.optionsImage}>
								{item.component}
							</TouchableOpacity>
							<Text style={styles.iconText}>{item.title}</Text>
						</View>
					))}
				</View>
				<View>
					<H4>My Credentials</H4>
					<TouchableOpacity
						onPress={() => navigation.navigate('Credentials')}
						style={styles.icons}>
						{data.map((item, i) => (
							<View key={i} style={styles.icon}>
								<View style={styles.iconImage}>{item.component}</View>
								<Text style={styles.iconText}>{item.title}</Text>
							</View>
						))}
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	main: { backgroundColor: '#fff', flex: 1 },
	page: { margin: 16, backgroundColor: '#fff', flex: 1 },
	background: {
		width: '100%',
		borderRadius: 30,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: 24,
		paddingVertical: 36,
		marginTop: 16,
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginVertical: 32,
	},
	optionsIconContainer: {
		display: 'flex',
	},
	optionsImage: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 62,
		width: 62,
		borderRadius: 20,
		marginVertical: 8,
		backgroundColor: 'whitesmoke',
	},
	icons: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginVertical: 16,
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '22%',
		marginVertical: 8,
	},
	iconImage: {
		marginVertical: 8,
	},
	iconText: {
		textAlign: 'center',
		color: '#777777',
		fontWeight: '500',
	},
});

export default WalletScreen;
