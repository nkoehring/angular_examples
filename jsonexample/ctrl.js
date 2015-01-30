angular.module("App").controller("Ctrl", function($scope, dataService) {
    dataService.getData().then(function(response) {
        console.log("response", response);
        $scope.items = response.data.items;
    });
});
