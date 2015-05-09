var laBibliotecaApp = angular.module('laBibliotecaApp',['ngCookies']);

laBibliotecaApp.controller('baseCtrl', ['$scope','$interval','$cookieStore', function($scope,$interval,$cookieStore){
	var vm = $scope;

	//Config iniciales
	var tmpPart = $cookieStore.get('playInv');
	if(angular.isObject(tmpPart)){
		vm.usr = tmpPart;
	}else{
		vm.usr = [];
	}
	vm.txtcentral = 0;


	vm.daEnter = function(keyEvent,bloque,parr) {
 		if (keyEvent.which === 13){
 			vm.txtcentral = bloque;
 			vm.parrafo = 0;
 			if(parr > 0){
 				$interval(function(){
 					vm.parrafo = vm.parrafo + 1;
 				}, 3000, parr);
 			}
 		}
	}

	vm.$watch('usr.clase',function(clase, antiguo){
		if(clase == 'Mago'){
			vm.usr.magia=20
			vm.usr.pegar=15
			vm.usr.golpear=13
			vm.usr.esquivar=17
			vm.usr.aguante=13
			vm.usr.vitalidad=15
			vm.usr.sigilo=15
			vm.usr.precision=15
			console.log(vm.usr);
		}
	})

}])