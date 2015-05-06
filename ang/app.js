var laBibliotecaApp = angular.module('laBibliotecaApp',[]);

laBibliotecaApp.config(
	function keyEventsConfig( keyEventsProvider ) {

			// Each shortcut() operator gets called with the event object and the 
			// "is" object. The goal here is to add ".is" properties based on the 
			// state of the event.
			keyEventsProvider.addShortcut(
				function operator( event, is ) {
					is.esc = ( ( event.type === "keydown" ) && ( event.which === 27 ) );
					// NOTE: The CMD-ENTER combination is more consistently reported
					// in the keydown event (as opposed to the keypress event). As 
					// such, we'll consider it false unless the event type is appropriate.
					is.cmdEnter = ( ( event.type === "keydown" ) && ( event.which === 13 ) && event.metaKey );
					if(is.cmdEnter){
						console.log('Es enter');
					}
				}
			);
		}
);


laBibliotecaApp.controller('baseCtrl', ['$scope','$interval', function($scope,$interval){
	var vm = $scope;
	vm.txtcentral = 0;
	$scope.daEnter = function(keyEvent,bloque,parr) {
 		if (keyEvent.which === 13){
 			console.log(vm.nombreJugador);
 			vm.txtcentral = bloque;
 			vm.parrafo = 0;
 			$interval(function(){
 				vm.parrafo = vm.parrafo + 1;
 			}, 3000, parr);
 		}
	}
}])