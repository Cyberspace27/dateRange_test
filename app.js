var nameSpace = angular.module('tst',[]);

nameSpace.controller('MyController', function MyController($scope) {
  $scope.date1 = "27-05-2010"
  $scope.date2 = "29-07-2015";
  $scope.orders = [
  {
    "date1": 1306487800,
    "date2": 1406587800,
    "date1": 1306587800,
    "date2": 1306587800
  },
  {
    "date1": 1196487800,
    "date2": 1406597800,
    "date1": 1206587800,
    "date2": 1206587800
  }]
});

// parse a date in dd-mm-yyyy format
function parseDate(input) {
  var parts = input.split('-');
  // Note: months are 0-based
  console.log(new Date(parts[2], parts[1]-1, parts[0]));
  return new Date(parts[2], parts[1]-1, parts[0]); 
}

nameSpace.filter("myfilter", function() {
  return function(items, from, to) {

        var df = parseDate(from);
        var dt = parseDate(to);

        console.log(items);
        var arrayToReturn = [];        
        for (var i=0; i<items.length; i++){
            var tf = new Date(items[i].date1 * 1000),
                tt = new Date(items[i].date2 * 1000);
                console.log("variable tf =" + tf);
                console.log("variable tt =" + tt);
            if (tf > df && tt < dt)  {
                arrayToReturn.push(items[i]);
            }
        }
        
        return arrayToReturn;
  };
});

/*
.filter('dateRange', function() {
return function(items, startDate, endDate) {
  var retArray = [];

  if (!startDate && !endDate) {
    return items;
  }

    angular.forEach(items, function(obj){
        var receivedDate = obj.date;        
        if(moment(receivedDate).isAfter(startDate) && moment(receivedDate).isBefore(endDate)) {
            retArray.push(obj);
        }
    });

    return retArray;

}
})
*/
