let bgColors = ['tomato', 'blue' , 'yellow' , 'red', 'white'];
for (let i = 0; i < bgColors.length; i++) {
    $('.color-options li').eq(i).css('backgroundColor',bgColors[i])
}

$('.color-options li').click(function(){
    let currBg= $(this).css('backgroundColor');
    $('.change-color').css('color',currBg);
    $('.change-col').css('borderColor',currBg);
})

$('.color-box i').click(function(){
    let currWidth= $('.color-options').outerWidth();
    if( $('.color-box').css('left')=='0px')
    {
        $('.color-box').animate({'left':-currWidth},1500)
    }
    else
    {
        $('.color-box').animate({'left':0},1500)
    }
    
})

$('.nav-link').click(function(e){
    let currHref= $(e.target).attr('href');
    let currOffset= $(currHref).offset().top;
    $('body,html').animate({scrollTop:currOffset},1000)
})
$('.up-icon a').click(function(){
    $('body,html').animate({scrollTop:0},2000)
})
$('.team-btn').click(function(){
    let currOffset= $('.in-touch').offset().top;
    $('body,html').animate({scrollTop:currOffset},1000)
})