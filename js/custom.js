angular.module('icDirectives')

.directive('icTaxonomyOverlay',[

	'ic',

	function(ic){
		return {
			restrict:		'E',
			templateUrl: 	'partials/ic-taxonomy-overlay.html',
			scope:			true,

			link: function(scope, element, attrs){
				scope.ic = ic

				scope.$parent.$watch(attrs.icExpand, function(x){ scope.icExpand = x})
			}
		}
	}
])

.directive('icSurveyPopup',[

	'ic',

	function(ic){
		return {
			restrict:		'E',
			templateUrl: 	'partials/ic-survey-popup.html',
			scope:			true,

			link: function(scope, element, attrs){
				scope.ic = ic

			}
		}
	}
])

.directive('icOneTimePopup',[

	'ic',

	function(ic){
		return {
			restrict:	'A',
			scope: 		{
							icPopupId: 		"@",
							icPopupName: 	"@",
							icPopupMessage: "<?"
						},

			link: function(scope, element, attrs){
				scope.ic = ic

				console.log('linking one time popup', scope.icPopupId, scope.icPopupMessage)

				if(!scope.icPopupId){
					console.warn('icOneTimePopup: missing icPopupId')
					return null
				}
				var seen = {}

				try{
					seen = JSON.parse(localStorage.getItem('seenOneTimePopups')) || {}
				} catch(e) { console.log(e) }

				if(seen && seen[scope.icPopupId]) return true

				ic.overlays.open(scope.icPopupName, scope.icPopupMessage || undefined)
				.finally(function(){
					console.log('test: overlay read', scope.icPopupId)
					seen[scope.icPopupId] = true

					localStorage.setItem('seenOneTimePopups', JSON.stringify(seen))
				})
			}
		}
	}
])



angular.module('icFilters')

.filter('icCategory', [

	'icTaxonomy',

	function(icTaxonomy){
		var dummy = {name: 'unknown'}
		
		return function(item){
			var tags = item && item.tags

			if(!tags) return dummy


			return icTaxonomy.getCategory(item && item.primaryTopic || tags)
		}
	}
])