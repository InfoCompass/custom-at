(function(exports){


	exports.categories = [
		{
			name:	'accomodation',
			colors:	['#FA9A20'],
			tags: 	[]
		},
		{
			name:	'addiction',
			colors:	['#65B2B7'],
			tags:	[],
		},
		{
			name:	'asylum_counseling',
			colors:	['#66B2FF'],
			tags: 	[]
		},
		// {
		// 	name:	'care',
		// 	colors:	['#999'],
		// 	tags:	[]
		// },
		// {
		// 	name:	'debt',
		// 	colors:	['#999'],
		// 	tags:	[]
		// },
		{
			name:	'disability',
			colors:	['#BC8BD8'],
			tags:	[]
		},
		{
			name:	'discrimination',
			colors:	['#D69255'],
			tags: 	[]
		},
		// {
		// 	name:	'family_conflicts',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		// {
		// 	name:	'felony',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		{
			name:	'health',
			colors:	['#53C294'],
			tags: 	[]
		},
		{
			name:	'labour',
			colors:	['#438eba'],
			tags: 	[]
		},
		{
			name:	'migration_counseling',
			colors:	['#DEA0CA'],
			tags: 	[]
		},
		// {
		// 	name:	'mental_health',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		// {
		// 	name:	'pregnancy',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		// {
		// 	name:	'sex_work',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		// {
		// 	name:	'sti',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		// {
		// 	name:	'sport',
		// 	colors:	['#999'],
		// 	tags: 	[]
		// },
		{
			name:	'support',
			colors:	['#B2C060'],
			tags: 	[]
		},
		{
			name:	'violence',
			colors:	['#F4504F'],
			tags: 	[]
		},


		{
			name:	'misc_category',
			colors:	['#9CAEC2'],
			tags: 	['care', 'debt', 'family_conflicts', 'felony', 'mental_health', 'pregnancy', 'sex_work', 'sport', 'sti', ]
		}

	]

	exports.types = []

	exports.tags = {
		target_groups: [
			'young',
			'women',
			'asylum_seekers',
			'eu_citizens',
			'no_health_ensurance',
			'houseless',
			'lgbtiq',
			'misc_target'
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
			'senias_partin',
			'senias_akrom',
			'senias_intlot',
			'senias_msd',
			'senias_mifl',
			'senias',
			'bamf_mbe',
			'bamf_jmd',
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
			'ehap',
			'esf',
			'lotto',
			'aktion_mensch',





			'senias',
			'senaif',
			'senjva',
			'bmibh',
			'eu',
			'esd', 
			'lads', 
			'bpui', 
			'bamh',
			'batk',
			'balb',
			'bzpk',
			'kjs',
			'perspektywy',
			'lb',
			'lsb',
			'tbb',
			'inlo',
			'jmd',
			'brd'
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
