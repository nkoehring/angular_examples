angular.module("App", []).service("dataService", function($http) {
    var service = {};

    service.getData = function() {
        var request = $http({
            method: "GET",
            url: "/data.json",
            responseType: "json"
        });

        return request;
    };

    return service;
});
