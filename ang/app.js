var laBibliotecaApp = angular.module('laBibliotecaApp',[]);
laBibliotecaApp.controller('baseCtrl', ['$scope','$interval', function($scope,$interval){
	var vm = $scope;
	vm.usr = [];
	vm.txtcentral = 0;
	vm.usr.clase = "";
	vm.mago = 0;
	vm.$watch(vm.usr.clase, function(clase){
		console.log("Entra");
		if(clase == 'Mago'){
			vm.usr.magia=20
			vm.usr.pegar=15
			vm.usr.golpear=13
			vm.usr.esquivar=17
			vm.usr.aguante=13
			vm.usr.vitalidad=15
			vm.usr.sigilo=15
			vm.usr.precision=15
			console.log('Stats asignadas a usuario: ');
			console.log(vm.usr);
		}
	})
	vm.daEnter = function(keyEvent,bloque,parr) {
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