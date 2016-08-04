(function(){
  var myApp = angular.module('myApp', ['ngAnimate', 'ngMaterial']);

  myApp.controller('MapController', ['$scope', '$http', '$mdToast', '$document', function($scope, $http, $mdToast, $document){


var nodeCount=[[],[],[],[]];
var errorMessage = " ";
var locations = ['MotherBoard Gymno','Weather_Node_1','MotherBoard Trimeria','Weather_Node_2'];

  $scope.showToast1 = function(error) {
                  $mdToast.show(
                     $mdToast.simple()
                        .textContent(error)
                        .hideDelay(30000)

                  );
  };

  var measurementsObserver  =  function(response){

  console.log(nodeCount[0]);
  console.log(nodeCount[0][0]);
  console.log(nodeCount[0][1]);


     for (var i = 0 ; i<nodeCount.length ; i++){

         if(response[nodeCount[i][0]].values === response[nodeCount[i][1]].values){
            errorMessage = errorMessage.concat(locations[i] + ': No updated values \n');
            console.log(errorMessage);
          }
   }

       if(errorMessage != " "){
         $scope.showToast1(errorMessage);
       }



  };


var locationIdObserver =function(response){

    nodeCount=[[],[],[],[]];
    errorMessage = "";

  	angular.forEach(response,function(value,key){

          if( value.node_id ==='MotherBoard Gymno ip: 212.152.76.216'){
             nodeCount[0].push(key);
          }
          else if(value.node_id ==='Weather_Node_1'){
             nodeCount[1].push(key);
          }
          else if(value.node_id ==='MotherBoard Trimeria ip: 212.152.77.60'){
             nodeCount[2].push(key);
          }
          else if(value.node_id ==='Weather_Node_2'){
             nodeCount[3].push(key);
          }
  });

    for (var k=0 ; k<nodeCount.length; k++ ){
      console.log(nodeCount[k]);
      if(nodeCount[k].length < 2){
        console.log( locations[k] + '  : ' + nodeCount[k] );
        errorMessage = errorMessage.concat(locations[k] +': ' + nodeCount[k].length + ' updates \n');
      }
    }

        if (errorMessage === ""){
          console.log('returns 1');
          return 1;
        }
        else{
          $scope.showToast1(errorMessage);
          return 0;
        }
};




  	var refresh = function(){

  		$http.get('../../json/data.json').success(function (response){
  			console.log("I got the data");
  			$scope.measurements = response;

        if(locationIdObserver(response)){
           measurementsObserver(response);
        }
  		});
  	};

  	refresh();
  //  $scope.showToast1();


  	$scope.getTemp = function (){

    	console.log('Temperature Button pressed!!');
  		$http.get('../../json/data.json').success(function(response) {
    			$scope.measurements = response;


    			angular.forEach(response,function(value,key){


          });

  		});
  }




  }]);


})();
