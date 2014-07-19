var app=angular.module('android', []);

function MyCtrl($scope) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
  $scope.items = [

      
       
        {    
            id:"myModal5",
            bookid:"ئەپنىڭ مەنبە كودىغا ئېرىشىش",
            url: 'http://bilig.cc/course/16/lesson/121/media',
title:'ئىھتىمال سىزنىڭمۇ قالتىس ئەپلەرنى ياسىغىڭىز باردۇ،لىكىن تېخنكا ياكى پىروگىرامما تىلى بىلمەسلىك ياكى بەزى ئىقتىدارلارنى ئۈزلەشتۈرۈشكە كۆپ ۋاقىت كىتىدىغانلىقى ئۈچۈن،بەزى كۆڭلىڭىزدەك ئەپلەرنى ۋاقتىنچە ياسىيالمىغان بولۇشڭىز مۇمكىن،مەن سىزگە تۆۋەندە بىر تېخنىكا تونۇشتۇرىمەن ،بۇتېخنىكا ئارقىلىق سىز ھەرقانداق android ئەپلىرنىڭ ئەسلى java كودىغا ئىرىشەلەيسىز،ئەپنىڭ ئەسلى Java كودىغا ئىرشتىم دىگەنلىك،بەزى ئەپلەردىكى قالتىس ئىقتىدارلارنىڭ قايسى كود قانداق پىروگىرامما مىتود ياكى تۈرى ئارقىلىق ئەمەلگە ئاشقانلىقىنى بىلۋالدىم دىگەنلىكتۇر'
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
