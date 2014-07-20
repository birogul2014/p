var app=angular.module('typescript', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
  $scope.items = [

        {   
            id:"myModal1",
            bookid:"ts ھەققىدە-ۋە باشلاش",
            url: 'http://bilig.cc/course/11/lesson/59/media',
title:'ts ھەققىدە-ۋە باشلاش'        },
     
       
        {    
            id:"myModal2",
            bookid:" تىپ ھەققىدە ئومۇمى چۈشەنچە",
            url: 'http://bilig.cc/course/11/lesson/60/media',
title:' تىپ ھەققىدە ئومۇمى چۈشەنچە'
        }
        ,
     
       
        {    
            id:"myModal3",
            bookid:"boolean راس يالغانغا ھۆكۈم قىلىش",
            url: 'http://bilig.cc/course/11/lesson/61/media',
title:'boolean راس يالغانغا ھۆكۈم قىلىش'
        }
 ,
     
       
        {    
            id:"myModal4",
            bookid:" ھەرىپ بەلگىلەر تىزمىسى",
            url: 'http://bilig.cc/course/11/lesson/62/media',
title:'  ھەرىپ بەلگىلەر تىزمىسى'
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
