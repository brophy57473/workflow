$(function(){

    var creds = sessionStorage.getItem("creds");

    $('#bc-box').hide();

    if (creds){
        console.log('yay creds');
        $(".cred-full").show();
    } else {
        $('.cred-empty').show();
    }

    $(".cred-empty").on("click",function(){
        $('.input-box').css('bottom','80px');
    })

    $('#change-creds').on('click',function(){
        $('.input-box').css('bottom','80px');
    })

    $('#show-creds').on('touchstart',function(){
        $('#bc-target').barcode(creds,"code128",{barWidth: 3, barHeight: 500, showHRI: false});
        $('#bc-box').show();
    })

    $('#show-creds').on('touchend',function(){
        $('#bc-box').hide();
    })

    $('button').on('click',function(){
        creds = $('input').val();
        sessionStorage.setItem("creds",creds);
        $('.input-box').css('bottom','0px');
        $('#bc-target-creds').barcode(creds,"code128",{barWidth: 3, barHeight: 400, showHRI: false});
        $('.cred-empty').hide();
        $('.cred-full').show();
    })

    $('.menu-icon').on('click',function(){
        $('nav').slideToggle();
    })

})