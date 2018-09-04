(function(exports){




	exports.categories = []

	exports.types = []

	exports.tags = {
		topics: [
			'migration_counseling',
			'asylum_counseling',
			'support',
			'labour',
			'health',
			'accomodation',
			'anti_discrimination',
			'violence'

		],
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
			'friedrichshain_kreuzberg',
			'pankow',
			'charlottenburg_wilmersdorf',
			'spandau',
			'steglitz_zehlendorf',
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
