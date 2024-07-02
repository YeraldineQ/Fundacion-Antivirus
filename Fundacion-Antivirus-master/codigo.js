/*Botón flotante Yeral*/
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

/*Sección 2 Oportunidades*/
var current = 0;
var imagenes = new Array();

$(document).ready(function() {
    var numImages = 6;
    if (numImages <= 3) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }
	 
    $('.left-arrow').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 3;
        }
        
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
        
        return false;
    });

    $('.left-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });

    $('.right-arrow').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });

    $('.right-arrow').on('click', function() {
        if (numImages > current + 3) {
            current = current+1;
        } else {
            current = 0;
        }
        
        $(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
        
        return false;
    }); 
 });