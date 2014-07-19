var app=angular.module('css', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
  $scope.items = [

        {   
            id:"myModal1",
            bookid:"CSS ھەققىدە قىسقىچە چۈشەنچە",
            url: 'http://bilig.cc/course/18/lesson/111/media',
title:'CSS ھەققىدە قىسقىچە چۈشەنچە'        },
     
       
        {    
            id:"myModal2",
            bookid:" CSS نىڭ ئاساسىي گىرامماتىكىسى",
            url: 'http://bilig.cc/course/18/lesson/112/media',
title:' CSS نىڭ ئاساسىي گىرامماتىكىسى'
        }
        ,
     
       
        {    
            id:"myModal3",
            bookid:"CSS نىڭ ئالىي گىرامماتىكىسى",
            url: 'http://bilig.cc/course/18/lesson/113/media',
title:'CSS نىڭ ئالىي گىرامماتىكىسى'
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
