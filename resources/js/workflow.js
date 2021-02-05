$(function(){

    let heightWindow = $(window).height();
    let heightContainer = heightWindow - 420;

    $('.grid-container').css('height',heightContainer);
    $('.c').css('height',heightContainer);
    $('.x, .sa').css('height',(heightContainer/2)-5);
   
    $('#bc-box').hide();

    $('div.option').on('touchstart',function(){
        var opt = $(this).html();
        makeCode(opt);
        showCode(opt);
        setTimeout(function() {
            $('#bc-target').css('margin-left','4px');
            setTimeout(function() {
                $('#bc-target').css('margin-left','-4px');
            }, 10)
        }, 10)
    })

    $('div.option').on('touchend',function(){
        var opt = $(this).html();
        if (opt === 'C' || opt === 'X') {
            $('#bc-box').hide();
        } else if (opt === 'SA'){
            $('#bc-target').barcode('L',"code128",{barWidth: 4.5, barHeight: 400, showHRI: false});
            setTimeout(function(){
                $('#bc-box').hide();
            }, 300);
        }
    })

    const showCode = () => { 
        $('#bc-box').show();
    }

    const makeCode = opt => {
        $('#bc-target').barcode(opt,"code128",{barWidth: 4.5, barHeight: 400, showHRI: false});
    }

})
