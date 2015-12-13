/**
 * Created by tomer on 9/15/15.
 */
var app = angular.module('app', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.people = [{
        name: 'Girl1',
        pic: 'http://weknowyourdreams.com/images/girl/girl-06.jpg',
        value: '1'
    }, {
        name: 'Girl2',
        pic: 'http://dreamatico.com/data_images/girl/girl-8.jpg',
        value: '2'
    }, {
        name: 'Girl3',
        pic: 'http://cdn.playbuzz.com/cdn/837956f3-756f-4901-b151-a72faa7e86f1/26d40aab-d042-428e-a0ff-7f12eb4718d1.jpg',
        value: '3'
    }];
    $scope.params = ["Who has the nicest BUTT", "Who has the best TITS","Who has the sexiest LEGS","Who has the most beautiful FACE","Who has the best CHARACTER","Who do you have the best EXPERIENCE with","Who do you share the most COMMON INTERESTS with"]
    $scope.submit = function(){
        swal({   title: "Error!",   text: "",   type: "error",   confirmButtonText: "K" });
    }
}]);
