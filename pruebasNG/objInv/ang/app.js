var pruebaInvApp = angular.module('pruebaInvApp',['ngCookies']);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', '$cookieStore', function($scope,$interval,$http){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
		console.log(vm.objetos);
	})

	vm.player.inventario = { "cabeza": vm.equipCabeza, "brazoIzq": vm.equipBrazoIzq, "brazoDer": vm.equipBrazoDer };
	vm.equipar = function(){
		$cookieStore.put('playInv', vm.player.inventario);
		var galletilla = $cookieStore.get('playInv');
		console.log(galletilla);
	}
}])