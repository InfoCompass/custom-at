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

.directive('icAlertPopup',[

	'ic',

	function(ic){
		return {
			restrict:		'E',
			templateUrl: 	'partials/ic-alert-popup.html',
			scope:			true,

			link: function(scope, element, attrs){
				scope.ic = ic

			}
		}
	}
])

.directive('icMikiPopup',[

	'ic',

	function(ic){
		return {
			restrict:		'E',
			templateUrl: 	'partials/ic-miki-popup.html',
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




//BOT

window.addEventListener('ic-ready', event => {

	const ic = event && event.detail && event.detail.ic

	console.log('ic-ready, starting chat bot')

	if(ic.config.chatbot){	

		function modifyChatWidget(mutationList, observer){
			const chat_widget 		= document.querySelector("#webchat")

			const links				= Array.from(chat_widget.getElementsByTagName('A'))
			const target_links		= links.filter( node => node.hasAttribute('target'))

			target_links.forEach( link => {
				link.removeAttribute('target')
				link.addEventListener('click', () => WebChat.close() )
			})


			//input hint
			const current_language	= ic.site.currentLanguage.toUpperCase()
			const text_input_hint	= ic.languages.translationTable[current_language]['INTERFACE']['CHAT_BOT_INPUT_HINT']

			const textarea			= chat_widget.getElementsByTagName('TEXTAREA')[0]

			textarea && textarea.setAttribute('placeholder', text_input_hint)

			//logo

			const header			= chat_widget.querySelector('.rw-header')

			header && header.classList.add('icon', 'icon-interface-chat_logo', 'white')

			//rw-send 

			const send_button 		= chat_widget.querySelector('button.rw-send')

			send_button && send_button.classList.add('icon', 'icon-interface-right', 'plain')



			//launcher

			

			const open_launcher		= chat_widget.querySelector('.rw-open-launcher__container')

			open_launcher && open_launcher.classList.add('icon-interface-chat_bubble', 'white')

		}

		const chat_widget 	= document.querySelector("#webchat")
		const observer		= new MutationObserver(modifyChatWidget)

		observer.observe(chat_widget, {subtree: true, childList: true})

		console.log(WebChat)

		WebChat.default({
			selector: 			"#webchat",
			connectOn:			"mount",
			inputTextFieldHint: '',
			customMessageDelay: (message) => {
									let delay = message.length * 7
									if (delay > 2 * 1000) delay = 2 * 600
									if (delay < 400) delay = 600
									return delay
								},
			...ic.config.chatbot
		})



	}

})
