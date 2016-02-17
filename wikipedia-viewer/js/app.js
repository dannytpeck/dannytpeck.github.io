var app = angular.module('wikiViewer', []);

var url = 'https://en.wikipedia.org/w/api.php?action=query&generator=search&prop=info|extracts&exintro&explaintext&exsentences=1&exlimit=max&inprop=url&rawcontinue&format=json&gsrsearch=';
var callback = '&callback=JSON_CALLBACK';

app.controller('searchController', function($scope, $http) {
  
  $scope.search = function() {
    $http.jsonp(url + $scope.searchText + callback).success(function(response) {
      $scope.pages = response.query.pages;
    });
  }

});