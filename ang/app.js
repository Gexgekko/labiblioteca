var laBibliotecaApp = angular.module('laBibliotecaApp',[]);

laBibliotecaApp.controller('baseCtrl', ['$scope','$interval', function($scope,$interval){
	var vm = $scope;
	vm.txtcentral = 0;
	$scope.daEnter = function(keyEvent,bloque,parr) {
 		if (keyEvent.which === 13){
 			console.log(vm.player.nombre);
 			vm.txtcentral = bloque;
 			vm.parrafo = 0;
 			if(parr > 0){
 				$interval(function(){
 					vm.parrafo = vm.parrafo + 1;
 				}, 3000, parr);
 			}
 		}
	}
}])