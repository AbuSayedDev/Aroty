
/*======>button-bars start<=======*/
    $(document).ready(function(){
        $(".button-bars").click(function(){
            $(".header-top-mid-nav").fadeToggle();
        })
    });

/*======>btn-searchstart <=======*/
    $(document).ready(function(){
        $("#btn-search").click(function(){
            $(".header-search-hide").show();
        });
        $(".header-search-hide-icon").click(function(){
            $(".header-search-hide").hide();
        })
    });