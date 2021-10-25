import i18n from 'i18n-js';
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Languages from '../assets/languages.png';
import { Button } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
const ChangeLanguage = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Image
				style={{ height: '50%', width: '100%', marginBottom: 20, marginTop: 0 }}
				source={Languages}
			></Image>
			<View style={{ flex: 0.5 }}>
				<Text>{i18n.t('changeLanguageInfo')}</Text>
				<Button
					onPress={() => {
						{
							/* 
              Starts the LOCALE_SETTINGS activity and resolves the promise when the user returns to the app.
              Obviously only works for Android 
              */
						}
						IntentLauncher.startActivityAsync(IntentLauncher.ACTION_LOCALE_SETTINGS);
					}}
					title={i18n.t('changeLanguage')}
				></Button>
			</View>
		</View>
	);
};

export default ChangeLanguage;
