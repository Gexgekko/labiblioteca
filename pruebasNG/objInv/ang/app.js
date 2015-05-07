var pruebaInvApp = angular.module('pruebaInvApp',[]);

pruebaInvApp.controller('baseCtrl', ['$scope','$interval', '$http', function($scope,$interval,$http){
	var vm = $scope;
	$http.get('objetos.json').success(function(objeto){
		$scope.objetos = objeto;
		console.log($scope.objetos);
	})
}])