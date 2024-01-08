(function(exports){


	exports.categories = [
		{
			name:	'accommodation',
			colors:	['#fa9a20'],
			tags: 	[]
		},
		{
			name:	'addiction',
			colors:	['#65b2b7'],
			tags:	[],
		},
		{
			name:	'asylum_counseling',
			colors:	['#66B2FF'],
			tags: 	[]
		},
		{
			name:	'disability',
			colors:	['#BC8BD8'],
			tags:	[]
		},
		{
			name:	'discrimination',
			colors:	['#d69255'],
			tags: 	[]
		},
		{
			name:	'health',
			colors:	['#53C294'],
			tags: 	['mental_health', 'sti', 'pregnancy', 'care', 'palliative']
		},

		{
			name:	'labour',
			colors:	['#438eba'],
			tags: 	['professional_recognition', 'study', 'self_employment']
		},
		{
			name:	'migration_counseling',
			colors:	['#f16a3c'],
			tags: 	[]
		},
		{
			name:	'support',
			colors:	['#b2c060'],
			tags: 	[]
		},
		{
			name:	'violence',
			colors:	['#f0d319'],
			tags: 	[]
		},

		{
			name:	'family',
			colors:	['#f74b41'],
			tags:	['block_mothers', "multi_language_children", 'family_conflicts']
		},

		{
			name:	'misc_category',
			colors:	['#9CAEC2'],
			tags: 	['debt', 'felony', 'sex_work', 'sport', 'counseling_neighbourhood']
		}

	]

	exports.types = []

	exports.tags = {
		target_groups: [
			'young',
			'women',
			'men',
			'families',
			'asylum_seekers',
			'eu_citizens',
			'no_health_insurance',
			'houseless',
			'lgbtiq',
			'misc_target',
			'elderly'
		],	
		districts: [
			'mitte',
			'friedrichshain_kreuzberg',
			'pankow',
			'charlottenburg_wilmersdorf',
			'spandau',
			'steglitz_zehlendorf',
			'tempelhof_schoeneberg',
			'neukoelln',
			'treptow_koepenik',
			'marzahn_hellersdorf',
			'lichtenberg',
			'reinickendorf'
		],

		languages: [

			'albanian',
			'amharic',
			'arabic',
			'aramaic',
			'armenian',
			'azerbaijani',
			'bengali',
			'bulgarian',
			'chechen',
			'chinese',
			'creole',
			'czech',
			'dari',
			'dutch',
			'english',
			'farsi',
			'french',
			'georgian', 			// Geordisch
			'greek',
			'hebrew',
			'hindu',
			'hungarian',
			'italian',
			'japanese',
			'kikuyu',
			'korean',
			'kurdish',
			'kurdish_kurmanji',
			'kurdish_sorani',		
			'latvian', 				// Lettisch, 
			'laz',
			'lingala', 				// Lingala, 
			'lithuanian',
			'luo',
			'macedonian',
			'moldovan',
			'montenegrin',
			'nepali',
			'oromo',
			'pashto',
			'polish',
			'portuguese',
			'punjabi',
			'romani',
			'romanian',
			'russian',
			'serbian_croatian',
			'slovene',
			'spanish',
			'suomi',
			'susu',
			'swahili',
			'tajiki',
			'tamilian',
			'thai',
			'tigrinya',
			'turkish',
			'turkmen',
			'ukranian',
			'urdu',
			'uzbek',
			'vietnamese',
			'wolof',
		],


		sponsors:[
			'aktion_mensch',
			'amif',
			'ba_charlottenburg_wilmersdorf',
			'ba_friedrichshain_kreuzberg',
			'ba_lichtenberg',
			'ba_marzahn_hellersdorf',
			'ba_mitte',
			'ba_neukölln',
			'ba_pankow',
			'ba_reinickendorf',
			'ba_spandau',
			'ba_steglitz_zehlendorf',
			'ba_tempelhof_schoeneberg',
			'ba_treptow_koepenik',
			'bamf_jmd',
			'bamf_mbe',
			'bmas',
			'bmfsfj',
			'bmg',
			'bmi',
			'bzga',
			'ehap',
			'esf',
			'esf_plus',
			'iq',
			'jobcenter',
			'lotto',
			'senbjf',
			'senbjf_stm',
			'sengpg',
			'senias',
			'senias_akrom',
			'senias_intlot',
			'senias_mifl',
			'senias_msd',
			'senias_partin',
			'senjustva',
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
