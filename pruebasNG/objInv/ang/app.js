var pruebaInvApp = angular.module('pruebaInvApp',['ngCookies']);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', '$cookieStore', function($scope,$interval,$http,$cookieStore){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
		console.log(vm.objetos);
	})
	var vm.player.inventario = [];
	vm.equipar = function(){
		var equipar = { "cabeza": vm.equipCabeza, "brazoIzq": vm.equipBrazoIzq, "brazoDer": vm.equipBrazoDer };
		$cookieStore.put('playInv', inventario);
		vm.player.inventario = $cookieStore.get('playInv');
		console.log(vm.player.inventario);
	}
}])