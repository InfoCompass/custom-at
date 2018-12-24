(function(exports){




	exports.categories = [
		{
			name:	'migration_counseling',
			colors:	['#f2b134'],
			tags: 	[]
		},
		{
			name:	'asylum_counseling',
			colors:	['#9caec2'],
			tags: 	[]
		},
		{
			name:	'support',
			colors:	['#068587'],
			tags: 	[]
		},
		{
			name:	'labour',
			colors:	['#438eba'],
			tags: 	[]
		},
		{
			name:	'health',
			colors:	['#A0C08E'],
			tags: 	[]
		},
		{
			name:	'accomodation',
			colors:	['#da6bbe'],
			tags: 	[]
		},
		{
			name:	'anti_discrimination',
			colors:	['#4fb99f'],
			tags: 	[]
		},
		{
			name:	'violence',
			colors:	['#ed553b'],
			tags: 	[]
		},
	]

	exports.types = []

	exports.tags = {
		target_groups: [
			'young',
			'women',
			'refugees',
			'eu_citizens',
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
			'dari',
			'english',
			'farsi',
			'french',
			'greek',
			'italian',
			'kurmandji',
			'kurdish',
			'pashto',
			'polish',
			'romani',
			'russian',
			'serbian_croatian',
			'spanish',
			'tigrinya',
			'turkish',
			'vietnamese',
			'misc_lang'
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))