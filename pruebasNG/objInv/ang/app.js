var pruebaInvApp = angular.module('pruebaInvApp',['ngCookies']);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', '$cookieStore', function($scope,$interval,$http,$cookieStore){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
		console.log(vm.objetos);
	})

	
	vm.player = [];
	var tmpInv =  $cookieStore.get('playInv');
	console.log("Temporal: ")
	console.log(tmpInv);
	if(angular.isObject(tmpInv)){
		vm.player.inventario = $cookieStore.get('playInv');
		console.log("Cargado");
		console.log(vm.player.inventario);
	}else{
		vm.player.inventario = [];
	}
	vm.equipar = function(){
		var equipar = { "cabeza": vm.player.cabeza, "brazoIzq": vm.player.brazoIzq, "brazoDer": vm.player.brazoDer };
		console.log("Equipar: ");
		console.log(equipar);
		$cookieStore.put('playInv', equipar);
		vm.player.inventario = $cookieStore.get('playInv');
		console.log("Inventario: ");
		console.log(vm.player.inventario);
	}
}])