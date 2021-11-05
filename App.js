import 'react-native-gesture-handler';
import React from 'react';
import Header from './components/Header';
import i18n from 'i18n-js';
import nb from './shared/strings/No';
import en from './shared/strings/En';
import * as Localization from 'expo-localization';
i18n.fallbacks = true;
i18n.translations = {
	en,
	nb,
};
i18n.locale = Localization.locale;

export default function App() {
	return <Header />;
}
