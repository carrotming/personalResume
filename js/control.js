var  $windowW=$(window).width();
var  $windowH=$(window).height();
if($windowW<=1550&&$windowH<=900){
    $('.bg1 .logo').css({
        marginTop:'-320px',
    })
    $('.bg1 .me').css({
        marginTop:'-180px',
    })
    $('.bg1 .read').css({
        marginTop:'-130px',
    })
    $('.bg1 .know1').css({
        marginTop:'-90px',
    })
    $('.bg1 .know2').css({
        marginTop:'-60px',
    })
    $('.bg1 .load').css({
        marginTop:'-14px',
        marginLeft:'-200px'
    })
    $('.bg1 .more').css({
        marginTop:'-20px',
    })
    $('.bg1 .thanks').css({
        fontSize:'54px',
        'textAlign':'center'
    })
    $('.bg1 .sorry').css({
        fontSize:'24px',
        'textAlign':'center',
        marginTop:'126px',
    })
    $('#canvas').css({
        bottom: '-20px'
    })
    $('#myModal .modal-body p').css({
        fontSize:'18px',
    })
    $('#practice .modal-body p').css({
        fontSize:'16px',
    })


    $('#box').css({
        marginTop:'-300px',
    })
    $('.der').css({
        marginTop:'185px',
    })
    $(' #box #oUl li').css({
        height: '320px'
    })
    $('.pic').css({
        marginTop:'-320px',
        fontSize:'50px',
    })
    $('.right').css({
        fontSize:'16px',
        lineHeight:'22px'
    })
}else if($windowW>=1600&&$windowH>=800){
    $('.bg1 .logo').css({
        marginTop:'-320px',
    })
    $('.bg1 .me').css({
        marginTop:'-180px',
    })
    $('.bg1 .read').css({
        marginTop:'-130px',
    })
    $('.bg1 .know1').css({
        marginTop:'-90px',
    })
    $('.bg1 .know2').css({
        marginTop:'-60px',
    })
    $('.bg1 .load').css({
        marginTop:'44px',
    })
    $('.bg1 .more').css({
        marginTop:'-20px',
    })
    $('.bg1 .thanks').css({
        fontSize:'54px',
        'textAlign':'center',
        marginTop:'80px',
    })
    $('.bg1 .sorry').css({
        fontSize:'24px',
        'textAlign':'center',
        marginTop:'180px',
    })
    $('#canvas').css({
        bottom: '-60px'
    })

    $('#myModal').css({
        marginTop:'126px',
    });
    $('#practice').css({
        marginTop:'120px',
    });
    $('#item').css({
        marginTop:'120px',
    })

    $('#myModal .modal-body p').css({
        fontSize:'22px',
    })
    $('#practice .modal-body p').css({
        fontSize:'20px',
    })
    $('.about-title').css({
        fontSize:'36px',
        marginTop:'-360px',
    });
     $('.btn-me').css({
         marginTop:'-280px',  
     });
     $('.about').css({
         fontSize:'22px', 
     })
    $('#box').css({
        marginTop:'-350px',
    })
    $('.der').css({
        marginTop:'290px',
        fontSize:'24px',
    })
    $(' #box #oUl li').css({
        height: '400px'
    })
    $('.pic').css({
        marginTop:'-420px',
        fontSize:'60px',
    })
    $('.right').css({
        fontSize:'20px',
        lineHeight:'30px'
    })
}