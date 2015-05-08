var pruebaInvApp = angular.module('pruebaInvApp',['ngCookies']);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', '$cookieStore', function($scope,$interval,$http,$cookieStore){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
		console.log(vm.objetos);
	})
	vm.player = [];
	vm.player.inventario = [];
	vm.equipar = function(){
		var equipar = { "cabeza": vm.equipCabeza, "brazoIzq": vm.equipBrazoIzq, "brazoDer": vm.equipBrazoDer };
		$cookieStore.put('playInv', equipar);
		vm.player.inventario = $cookieStore.get('playInv');
		console.log(vm.player.inventario);
	}
}])