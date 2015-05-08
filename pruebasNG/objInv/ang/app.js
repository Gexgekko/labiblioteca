var pruebaInvApp = angular.module('pruebaInvApp',['ngCookies']);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', '$cookieStore', function($scope,$interval,$http,$cookieStore){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
	})
	
	vm.usr = [];
	var tmpInv =  $cookieStore.get('playInv');
	if(angular.isObject(tmpInv)){
		vm.usr.inv = $cookieStore.get('playInv');
	}else{
		vm.usr.inv = [];
	}
	vm.equipar = function(){
		var equipar = { "cabeza": vm.usr.inv.cabeza, "bIzq": vm.usr.inv.bIzq, "bDer": vm.usr.inv.bDer };
		$cookieStore.put('playInv', equipar);
		vm.usr.inv = $cookieStore.get('playInv');
	}
	vm.muestra = function(id){
		vm.muestraDesc = id;
	}
}])