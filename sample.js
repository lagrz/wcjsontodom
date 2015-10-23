angular
    .module('app', ['wcJsonToDom'])

    .controller('view', ['$scope', '$http', '$q', function ($scope, $http, $q) {

        //Using angular's Q api to wait for all promises to finish
        //https://docs.angularjs.org/api/ng/service/$q#all
        var queue = [];
        for (var i = 1; i < 5; i++) queue.push($http({method: 'GET', url: 'sample' + i + '.json'}));
        $q.all(queue).then(function (values) {
            $scope.ajax = values;
        });
    }]);