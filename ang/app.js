var laBibliotecaApp = angular.module('laBibliotecaApp',['ngCookies']);
laBibliotecaApp.config(['$scope','$cookieStore', function($scope,$cookieStore){
	var vm = $scope;
//	var tmpPart = $cookieStore.get('playInv');
//	if(angular.isObject(tmpPart)){
//		vm.usr = tmpPart;
//	}else{
//		vm.usr = [];
//	}
	vm.txtcentral = 0;
}]);

laBibliotecaApp.controller('baseCtrl', ['$scope','$interval','$cookieStore', function($scope,$interval,$cookieStore){
	var vm = $scope;
	vm.$watch('usr.clase',function(clase, antiguo){
		if(clase == 'Mago'){
			console.log("Ha entrao en mago")
			vm.usr.magia=20
			vm.usr.pegar=15
			vm.usr.golpear=13
			vm.usr.esquivar=17
			vm.usr.aguante=13
			vm.usr.vitalidad=15
			vm.usr.sigilo=15
			vm.usr.precision=15
		}
	})
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
}])