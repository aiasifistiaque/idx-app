import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import ApproveScreen from '../screens/ApproveScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import useAuth from '../hooks/useAuth';
import ProfileScreen from '../screens/ProfileScreen';
import BlankScreen from '../screens/BlankScreen';
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<RootNav />
		</NavigationContainer>
	);
};

const RootNav = () => {
	const [refresh, setRfresh] = useState(false);
	const auth = useAuth(refresh);
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Auth' component={AuthStack} />
			<Stack.Screen name='MainTab' component={MainTab} />
		</Stack.Navigator>
	);
};

const MainTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Wallet') {
						return <Ionicons name='shield-outline' size={size} color={color} />;
					} else if (route.name === 'Notification') {
						return (
							<Ionicons
								name='notifications-outline'
								size={size}
								color={color}
							/>
						);
					} else if (route.name === 'Discover') {
						return (
							<Ionicons name='compass-outline' size={size} color={color} />
						);
					} else if (route.name === 'History') {
						return (
							<FontAwesome5 name='exchange-alt' size={size} color={color} />
						);
					} else if (route.name === 'Profile') {
						iconName = focused ? 'user-o' : 'user-o';
					}

					// You can return any component that you like here!
					return <FontAwesome name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: '#0078e7',
				tabBarInactiveTintColor: 'gray',
			})}>
			<Tab.Screen name='Wallet' component={WalletStack} />
			<Tab.Screen name='Notification' component={AcceptCredentialStack} />
			<Tab.Screen name='Discover' component={BlankScreen} />
			<Tab.Screen name='History' component={BlankScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

const WalletStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='WalletHome' component={WalletScreen} />
			<Stack.Screen name='Credentials' component={HomeScreen} />
		</Stack.Navigator>
	);
};

const AcceptCredentialStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Notofication' component={NotificationScreen} />
			<Stack.Screen name='Approve' component={ApproveScreen} />
		</Stack.Navigator>
	);
};

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Register' component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default Navigation;
