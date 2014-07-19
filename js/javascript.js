var app=angular.module('javasript', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
  $scope.items = [

        {   
            id:"myModal1",
            bookid:" ئوبيكىتنىڭ خاسلىقىنى تەكشۈرۈش",
            url: 'http://bilig.cc/course/10/lesson/87/media',
title:' ئوبيكىتنىڭ خاسلىقىنى تەكشۈرۈش'        },
     
       
        {    
            id:"myModal2",
            bookid:" ئۆزگەرمەس مىقدار بەلگىلەش",
            url: 'http://bilig.cc/course/10/lesson/88/media',
title:' ئۆزگەرمەس مىقدار بەلگىلەش'
        }
        ,
     
       
        {    
            id:"myModal3",
            bookid:" سانلار گۇرۇپپىسدىكى سانلارنى رەتلەپ چىقىش",
            url: 'http://bilig.cc/course/10/lesson/89/media',
title:' سانلار گۇرۇپپىسدىكى سانلارنى رەتلەپ چىقىش'
        }
 ,
     
       
        {    
            id:"myModal4",
            bookid:" سانلار گۇرۇپپىسىدىن قىممەتنى سۈزۈپ ئىلىش",
            url: 'http://bilig.cc/course/10/lesson/90/media',
title:'  سانلار گۇرۇپپىسىدىن قىممەتنى سۈزۈپ ئىلىش'
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
