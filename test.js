/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', []);
app.controller('myController', function ($scope) {

    $scope.list = [
        {'sno': 1, 'name': 'xyz'},
        {'sno': 2, 'name': 'abc'},
        {'sno': 3, 'name': 'pqr'}
    ];
    $scope.date1 = [];
    $scope.date2 = [];
    $scope.show_list = function () {
        console.log($scope.date1);
        console.log($scope.date2);
        var values = $scope.list;
        var date1 = $scope.date1;
        var date2 = $scope.date2;
        var i = 0;
        var log = [];
        angular.forEach(values, function (value, key) {
            log[i] = [
                value.sno,value.name, date1[i], date2[i]
            ];

            i++;
        });
        console.log(JSON.stringify(log));

    };
});


//var values = {name: 'misko', gender: 'male'};
//var log = [];
//angular.forEach(values, function(value, key) {
//  this.push(key + ': ' + value);
//}, log);