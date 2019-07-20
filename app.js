(function () {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.check = function () {
      $scope.message = fn().message;
      $scope.warningstyle = fn().warningstyle;
    };
    function fn() {
      let message = "",
        itemsArray = $scope.items.split(","),
        warningstyle = { "color": "red", "border": "1px solid red" },
        count = itemsArray.length;
      if ($scope.items === "") {
        message = "Please enter data first";
      }
      else {
        if (count <= 3) {
          message = "Enjoy!";
          warningstyle = { "color": "green", "border": "1px solid green", };
        }
        else {
          message = "Too much!";
        }
      }
      return { message, warningstyle };
    }
  }
}
)()