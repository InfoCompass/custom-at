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
		{
			name:	'care',
			colors:	['#999'],
			tags:	[]
		},
		{
			name:	'debt',
			colors:	['#999'],
			tags:	[]
		},
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
		{
			name:	'family_conflicts',
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'felony',
			colors:	['#999'],
			tags: 	[]
		},
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
		{
			name:	'mental_health',
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'pregnancy',
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'sex_work',
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'sti',
			colors:	['#999'],
			tags: 	[]
		},
		{
			name:	'sport',
			colors:	['#B2C060'],
			tags: 	[]
		},
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
			colors:	['#66B2FF'],
			tags: 	[]
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
			'arabic',
			'bulgarian',
			'bosanski',
			'dari',
			'english',
			'farsi',
			'french',
			'greek',
			'italian',
			'kurdish',
			'pashto',
			'polish',
			'romani',
			'romanian',
			'russian',
			'serbian_croatian',
			'spanish',
			'tigrinya',
			'turkish',
			'vietnamese',
			'misc_language'
		],
		sponsors:[
			'senias',
			'senaif',
			'senjva',
			'sengpg',
			'bmfsfj',
			'bmas',
			'bmibh',
			'ehap',
			'eu',
			'esd', 
			'iq',
			'lads', 
			'bpui', 
			'esf',
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
			'mbe',
			'brd'
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
