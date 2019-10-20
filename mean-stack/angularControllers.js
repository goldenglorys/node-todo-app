var todo = angular.module("todoApp", []);
    
    todo.controller("todoCtrl", ($scope) => {
        $scope.stores=[
            {name:"Samsung Gear VR"},
            {name:"HP Envy Laptop"}
        ];
        $scope.itemname = '';
        $scope.push = ()=>{
            $scope.stores.push({name:$scope.itemname});
        }
    })