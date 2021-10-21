import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
i18n.locale = Localization.locale;
let norwegian = i18n.locale == 'nb-NO';
let english = i18n.locale == 'en-GB';

/* Will default to this string if the language is en-GB or something or neither en-GB or nb-NO */
englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/* Will default to this string if the language is nb-NO */
norwegianAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ';

export let getAlphabet = () => {
	return norwegian ? norwegianAlphabet : english ? englishAlphabet : englishAlphabet;
};
