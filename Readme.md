# Wirecash JSON to DOM

Converts json object or array to a dom tree

## Usage

Include the javascript file:

`<script src="wcJsonToDom.js"></script>`

Include the module in your angular app:

`angular.module('app', ['wcJsonToDom'])`

Include the directive in your template:

`<wcjsontodom json="json.data"></wcjsontodom>`


Full sample:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My AngularJS App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body ng-app="app">
<div ng-controller="view">
    <div ng-repeat="object in ajax">
        {{object.data}}
        <wcjsontodom json="object.data"></wcjsontodom>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
<script src="wcJsonToDom.js"></script>
<script>
    angular.module('app', ['wcJsonToDom'])
    .controller('view', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        //Using angular's Q api to wait for all promises to finish
        //https://docs.angularjs.org/api/ng/service/$q#all
        var queue = [];
        for (var i = 1; i < 5; i++) queue.push($http({method: 'GET', url: 'sample' + i + '.json'}));
        $q.all(queue).then(function (values) {
            $scope.ajax = values;
        });
    }]);
</script>
</body>
</html>
```