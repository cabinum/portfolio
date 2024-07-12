$(function(){
    $(".formations, .compet, .proj").hide();
    });
    
    
    $(function(){
        $("#p1").click(function(){
            $('.formations').show(function(){
            $('.compet, .centener, .proj').hide();
            });
        
        });
        });
    
        $(function(){
            $("#p2").click(function(){
                $('.compet').show(function(){
                $('.formations, .centener, .proj').hide();
                });
            
            });
            });


            $(function(){
                $("#p3").click(function(){
                    $('.proj').show(function(){
                    $('.formations, .centener, .compet').hide();
                    });
                
                });
                });