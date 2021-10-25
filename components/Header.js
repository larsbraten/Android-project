import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import HangManGame from './HangManGame';
import i18n from 'i18n-js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Languages from '../assets/languages.png';
import { Button } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import ChangeLanguage from './ChangeLanguage';

function Info() {
	return (
		<View style={styles.info}>
			<Text>
				{i18n.t('info')}
				{'\n'}
				{i18n.t('gameInfo')}
			</Text>
		</View>
	);
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen component={HangManGame} name={i18n.t('hangMan')} />
			<Drawer.Screen component={ChangeLanguage} name={i18n.t('changeLanguage')} />
			<Drawer.Screen component={Info} name={i18n.t('appInfo')} />
		</Drawer.Navigator>
	);
};
const styles = StyleSheet.create({
	info: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default function Header() {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
}
