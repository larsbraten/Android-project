import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
i18n.locale = Localization.locale;

let norwegian = i18n.locale == 'nb-NO';
let english = i18n.locale == 'en-GB';
/* Will default to this list if the language is en-GB or neither en-GB or nb-NO */
internationalCity = [
	'OSLO',
	'LONDON',
	'PARIS',
	'AMSTERDAM',
	'STOCKHOLM',
	'ANKARA',
	'DUBAI',
	'MINSK',
	'BRUSSELS',
	'SOFIA',
	'TALLINN',
	'DUBLIN',
	'KABUL',
	'TIRANE',
	'LUANDA',
	'ALGIERS',
	'YEREVAN',
	'NASSAU',
	'DHAKA',
	'OUAGADOUGOU',
];

/* Will default to this list if the language is nb-NO */
norwegianCity = [
	'OSLO',
	'KONGSVINGER',
	'TRONDHEIM',
	'JESSHEIM',
	'ELVERUM',
	'LILLESTRØM',
	'STAVANGER',
	'DRAMMEN',
	'STEINKJER',
	'BERGEN',
	'ÅLESUND',
	'HAMAR',
	'GJØVIK',
	'KONGSBERG',
	'TØNSBERG',
	'KRISTIANSAND',
	'KRISTIANSUND',
	'FREDRIKSTAD',
	'MOLDE',
	'LILLEHAMMER',
];

/* Draws a random word from the Array of words */
export let word = () => {
	return norwegian
		? norwegianCity[Math.floor(Math.random() * norwegianCity.length)]
		: english
		? internationalCity[Math.floor(Math.random() * internationalCity.length)]
		: internationalCity[Math.floor(Math.random() * internationalCity.length)];
};
