import 'react-native-gesture-handler';
import React from 'react';

import HangManGame from './HangManGame';
import ChangeLanguage from './ChangeLanguage';
import Info from './Info';
import i18n from 'i18n-js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

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

export default function NavigationDrawer() {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
}
