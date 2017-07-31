$(document).ready(function() {
/* LEFT BLOCK Class Toggle */
    $(".tp").click(function () {
      /* opens the boxes Size */

      $( ".expand1" ).toggleClass( "open" );
      /*$( ".expand1" ).toggleClass( "center" );*/
      $( ".icon-wrap1" ).toggleClass( "left" );
    /* changes the width of parent container */
      $( ".col-5Switch1" ).toggleClass( "full" );
      $( ".col-5Switch2" ).toggleClass( "closed" );
    /*makes the bottom move with the content */
      $( ".btm" ).toggleClass( "open" );


        if($(".expand2").hasClass("open")){
          $( ".expand2" ).toggleClass( "open" );
          // $( ".expand2" ).toggleClass( "center" );
          $( ".icon-wrap2" ).toggleClass( "right" );
        /* changes the width of parent container */
          $( ".col-5Switch2" ).toggleClass( "full" );
          $( ".col-5Switch1" ).toggleClass( "closed" );
        /*makes the bottom move with the content */
          $( ".btm1" ).toggleClass( "open" );
          $( ".card" ).toggleClass( "open" );
          $( ".mail" ).toggleClass( "open" );
          $( ".people" ).toggleClass( "open" );
          $( ".hidden-img" ).toggleClass( "open" );
          $( ".hidden-img-c" ).toggleClass( "open" );
          $( ".containus" ).toggleClass( "open" );


        } else {
          if($("#logotop").hasClass( "show" )) {
            $("#logotop").removeClass("hide");
            $("#logotop").toggleClass("show");
          }
          /* opens and closes the top / flat earth content */
          if ($( "#logotop" ).not( "hide" )) {
            $( "#logotop" ).toggleClass( "hide" );
            $( "#logotop" ).removeClass( "show" );
          }



          /* opens and closes the top / flat earth content */
          $( ".card-container" ).toggleClass( "open" );
          $( ".card" ).toggleClass( "open" );

        }


    });



/* RIGHT BLOCK STUFF Class Toggle*/
    $(".expand2").click(function () {


      /* opens the boxes Size */
        $( ".expand2" ).toggleClass( "open" );
        /*$( ".expand2" ).toggleClass( "center" );*/
        $( ".icon-wrap2" ).toggleClass( "right" );
      /* changes the width of parent container */
        $( ".col-5Switch2" ).toggleClass( "full" );
        $( ".col-5Switch1" ).toggleClass( "closed" );
      /*makes the bottom move with the content */
        $( ".btm1" ).toggleClass( "open" );


        if($(".expand1").hasClass("open")){
          $( ".expand1" ).toggleClass( "open" );
          // $( ".expand1" ).toggleClass( "center" );
          $( ".icon-wrap1" ).toggleClass( "left" );
        /* changes the width of parent container */
          $( ".col-5Switch1" ).toggleClass( "full" );
          $( ".col-5Switch2" ).toggleClass( "closed" );
        /*makes the bottom move with the content */
          $( ".btm" ).toggleClass( "open" );
          $( ".card" ).toggleClass( "open" );
          $( ".mail" ).toggleClass( "open" );
          $( ".people" ).toggleClass( "open" );
          $( ".hidden-img" ).toggleClass( "open" );
          $( ".hidden-img-c" ).toggleClass( "open" );
          $( ".containus" ).toggleClass( "open" );

        } else {

          if($("#logotop").hasClass( "show" )) {
            $("#logotop").removeClass("hide");
            $("#logotop").toggleClass("show");
          }
          /* opens and closes the top / flat earth content */
          if ($( "#logotop" ).not( "hide" )) {
            $( "#logotop" ).toggleClass( "hide" );
            $( "#logotop" ).removeClass( "show" );
          }

          /* opens and closes the top / flat earth content */
          $( ".card-container" ).toggleClass( "open" );
          $( ".mail" ).toggleClass( "open" );
          $( ".people" ).toggleClass( "open" );
          $( ".hidden-img" ).toggleClass( "open" );
          $( ".hidden-img-c" ).toggleClass( "open" );
          $( ".containus" ).toggleClass( "open" );
      }

    });



    /* RIGHT BLOCK STUFF Class Toggle
    $(".log").click(function () {
      $( "#logotop" ).toggleClass( "hide" );
    });
    */


});
