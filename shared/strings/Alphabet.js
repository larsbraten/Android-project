import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import React from 'react';
i18n.locale = Localization.locale;
let norwegian = i18n.locale == 'nb-NO';
let english = i18n.locale == 'en-GB';
export default class Alphabet extends React.Component {}
/* Will default to this string if the language is en-GB or something or neither en-GB or nb-NO */
englishAlphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';

/* Will default to this string if the language is nb-NO */
norwegianAlphabet = 'QWERTYUIOPÅASDFGHJKLØÆZXCVBNM';

export let getAlphabet = () => {
	return norwegian ? norwegianAlphabet : english ? englishAlphabet : englishAlphabet;
};
