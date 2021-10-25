import i18n from 'i18n-js';
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Info = () => {
	return (
		<View style={styles.info}>
			<Text>
				{i18n.t('info')}
				{'\n'}
				{i18n.t('gameInfo')}
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	info: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Info;
