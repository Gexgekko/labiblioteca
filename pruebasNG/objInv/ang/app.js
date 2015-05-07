var pruebaInvApp = angular.module('pruebaInvApp',[]);

pruebaInvApp.controller('invCtrl', ['$scope','$interval', '$http', function($scope,$interval,$http){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		vm.objetos = objeto;
		console.log(vm.objetos);
	})
}])