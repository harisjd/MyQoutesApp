(function () {
    'use strict';

    angular
        .module('myQoutesApp')
        .controller('qoutesController', qoutesController);

    // Injecting qoutes service to $scope so that it can used to perform CRUD operations
    qoutesController.$inject = ['$scope', 'Quotes']; 

    function qoutesController($scope, Quotes) {
        //$scope.title = 'qoutesController';
        //activate();
        //function activate() { }

        $scope.quotes = Quotes.query();
    }
})();
