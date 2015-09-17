/**
 * Created by tomer on 9/15/15.
 */
var app = angular.module('app', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.people = [{
        name: 'Naomi',
        pic: 'https://goo.gl/t7GDwd',
        value: '1'
    }, {
        name: 'Dana',
        pic: 'https://goo.gl/D0nCGh',
        value: '2'
    }, {
        name: 'Sasha',
        pic: 'https://goo.gl/q65DUV',
        value: '3'
    }];
    $scope.params = ["Who has the nicest BUTT", "Who has the best TITS","Who has the sexiest LEGS","Who has the most beautiful FACE","Who has the best CHARACTER","Who do you have the best EXPERIENCE with","Who do you share the most COMMON INTERESTS with"]
    $scope.submit = function(){
        swal({   title: "Error!",   text: "",   type: "error",   confirmButtonText: "K" });
    }
}]);