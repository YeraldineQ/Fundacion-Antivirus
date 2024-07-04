// Carrusel Tatiana*
var current = 0;
var numImages = 9; // Ajuste para incluir las imágenes duplicadas

$(document).ready(function() {
    if (numImages <= 3) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }

    $('.left-arrow').on('click', function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 3;
        }

        $(".carruselt").animate({"left": -($('#productt'+current).position().left)}, 600);

        return false;
    });

    $('.left-arrow').hover(function() {
        $(this).css('opacity', '0.5');
    }, function() {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').hover(function() {
        $(this).css('opacity', '0.5');
    }, function() {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').on('click', function() {
        if (numImages > current + 3) {
            current = current + 1;
        } else {
            current = 0;
        }

        $(".carruselt").animate({"left": -($('#productt'+current).position().left)}, 600);

        return false;
    });
});

// fin Carrusel Tatiana
