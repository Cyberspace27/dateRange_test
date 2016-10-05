var nameSpace = angular.module('tst',[]);

nameSpace.controller('MyController', function MyController($scope) {
  $scope.date1 = "27-05-2010"
  $scope.date2 = "29-07-2015";
  $scope.orders = [
  {"date": 1306487800},
  {"date": 1196487800},
  {"date": 1196487800},
  {"date": 1296487800},
  {"date": 1396487800},
  {"date": 1096487800},
  {"date": 1296487800},
  {"date": 1286487800},
  {"date": 1186487800},
  {"date": 1196487800},
  {"date": 1396487800},
  {"date": 1096487800}

  ]
});

// parse a date in dd-mm-yyyy format
function parseDate(input) {
  var parts = input.split('-');
  // Note: months are 0-based
  //console.log(new Date(parts[2], parts[1]-1, parts[0]));
  return new Date(parts[2], parts[1]-1, parts[0]); 
}

nameSpace.filter("dateRangeFilter", function() {
  return function(items, from, to) {

        var df = parseDate(from);
        var dt = parseDate(to);
        //console.log(df);
        //console.log(dt);
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            var tf = new Date(items[i].date * 1000);//,
                //tt = new Date(items[i].date * 1000);
                console.log( "prueba fecha tf " + tf);
                //console.log( "prueba fecha tt " + tt);
                console.log( "prueba items " + items);

                //console.log("variable tf =" + tf);
                //console.log("variable tt =" + tt);
            if (tf > df && tf < dt)  {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
  };
});