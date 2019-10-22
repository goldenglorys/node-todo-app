var todo = angular.module("todoApp", []);
    
    todo.controller("todoCtrl", ($scope, $http) => {
        $scope.stores=[
            {name:"Samsung Gear VR"},
            {name:"HP Envy Laptop"}
        ];
        $scope.itemname = '';
        $scope.push = () => {
            $scope.stores.push({name:$scope.itemname}); 
        };

        $http.get("http://localhost:3000/api").then( (response) => {
            $scope.todos = response.data;
        });

        $scope.send = () => {
            let data = $scope.itemname;
            let config = {
                headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf8"}
            }
            $http.post("http://localhost:3000/sendItem", data, config).then((response) => {
                $scope.todos = response.data;
            });
        };
    })