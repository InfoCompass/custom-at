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
			tags: 	['mental_health', 'sti', 'pregnancy', 'care']
		},

		{
			name:	'labour',
			colors:	['#438eba'],
			tags: 	[]
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
			tags:	[]
		},

		{
			name:	'misc_category',
			colors:	['#9CAEC2'],
			tags: 	['debt', 'family_conflicts', 'felony', 'sex_work', 'sport',  'benn']
		}

	]

	exports.types = []

	exports.tags = {
		target_groups: [
			'young',
			'women',
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
			'aramaic',
			'arabic',
			'armenian',
			'azerbaijani',
			'bengali',
			'bulgarian',
			'chechen',
			'chinese',
			'creole',
			'dari',
			'dutch',
			'english',
			'farsi',
			'french',
			'greek',
			'hebrew',
			'hindu',
			'hungarian',
			'italian',
			'japanese',
			'kikuyu',
			'korean',
			'kurdish',
			'laz',
			'lithuanian',
			'luo',
			'macedonian',
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
			'slovene',
			'serbian_croatian',
			'spanish',
			'suomi',
			'swahili',
			'tajiki',
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
			'senias',
			'senias_partin',
			'senias_akrom',
			'senias_intlot',
			'senias_msd',
			'senias_mifl',
			'senbjf',
			'senbjf_stm',
			'jobcenter',
			'bamf_mbe',
			'bamf_jmd',
			'amif',
			'iq',
			'senjustva',
			'sengpg',
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
			'bmfsfj',
			'bmas',
			'bmi',
			'bzga',
			'ehap',
			'esf',
			'lotto',
			'aktion_mensch'
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
