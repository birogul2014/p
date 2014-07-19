var app=angular.module('myApp', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
  $scope.items = [

        {   
            id:"myModal1",
            bookid:"AngularJS ھەققىدە چۈشەنچە",
            url: 'http://bilig.cc/course/14/lesson/91/media',
title:'AngularJS ھەققىدە چۈشەنچە'        },
     
       
        {    
            id:"myModal2",
            bookid:"ng-model ئىقتىدارى",
            url: 'http://bilig.cc/course/14/lesson/92/media',
title:'ng-model ئىقتىدارى'
        },
          {    
            id:"myModal3",
            bookid:"ng-show ۋە ng-hide ئىقتىدارى",
            url: 'http://bilig.cc/course/14/lesson/93/media',
title:'ng-show ۋە ng-hide ئىقتىدارى'
        }

    ];
   
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
