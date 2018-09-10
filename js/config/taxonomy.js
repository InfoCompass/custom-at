(function(exports){




	exports.categories = [
		{
			name:	'migration_counseling',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'asylum_counseling',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'support',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'labour',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'health',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'accomodation',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'anti_discrimination',
			colors:	[],
			tags: 	[]
		},
		{
			name:	'violence',
			colors:	[],
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
			'misc'
		],	
		districts: [
			'mitte',
			'friedrichshain-kreuzberg',
			'pankow',
			'charlottenburg-wilmersdorf',
			'spandau',
			'steglitz-zehlendorf',
			'tempelhof-schoeneberg',
			'neukoelln',
			'treptow-koepenik',
			'marzahn-hellersdorf',
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
			'misc'
		]
	}


}(
	('undefined' !== typeof exports) 
	? exports
	: (this['ic'] = this['ic'] || {})['taxonomy'] = (this['ic']['taxonomy'] || {})
))
