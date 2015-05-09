var laBibliotecaApp = angular.module('laBibliotecaApp',[]);

laBibliotecaApp.controller('baseCtrl', ['$scope','$interval', function($scope,$interval){
	var vm = $scope;
	vm.txtcentral = 0;
	var contador = 0;
	vm.teclea = function(tecla){
		if(tecla.wich === 13){
			console.log("Enter");
			if(contador == 0){
				contador = 1;
				vm.parrafo = 0;
				$interval(function(){
 					vm.parrafo = vm.parrafo + 1;
 				}, 3000, 3);
			}

			if(contador == 1){
				contador = 2;
				vm.parrafo = 0;
			}
		}
	}
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