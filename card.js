angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope,$http) {
        $scope.i=1;
        $scope.interested=0;
        $scope.notinterested=0;
      $http.get('jobs.json').success(function(data){
    var jobs_json = data.jobs;
    $scope.jobs_json=jobs_json;
    $scope.len=$scope.jobs_json.length;
    $scope.card=$scope.jobs_json[$scope.i-1];
    });

        $scope.throwin = function (eventName, eventObject) {
            $scope.i++;
            if(($scope.i-1)>=$scope.len){
                $scope.i--;
                $scope.card={"skreq":"completed","resp":"completed"};
            }else{
    $scope.card=$scope.jobs_json[$scope.i-1];
    if(eventObject.throwDirection==1){
                $scope.interested++;
            }else if(eventObject.throwDirection==-1){
                $scope.notinterested++;
            }
    }
            $scope.$apply();
        };
    });