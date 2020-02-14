$(document).ready(function() {
    $('#start').click(function(){
        $(this).fadeOut();
        $('.title').fadeOut();
        $('.score').delay(500).fadeIn(1000);
        bikinObstacle();
    });
});

function tambahScore() {
    let scoreSaatIni = $('.score').text();
    let scoreBaru = parseInt(scoreSaatIni) + 1;
    $('.score').text(scoreBaru);
}

function bikinObstacle() {
    setTimeout(function() {
        let width = $(window).width();
        let height = $(window).height();
        let x = randomNumber(10, width - 50);
        let y = randomNumber(10, height - 50);

        let obs = '<button class="obs bulat" style="top:'+y+'px;left:'+x+'px;"></button>';
        $('#obstacle').append(obs);

        $('.obs').on("click", function() {
            $(this).attr("disabled", true);
            $(this).removeClass('obs');
            $(this).addClass('sukses');
            $(this).hide(1000);
            tambahScore();
        });

        bikinObstacle();
    }, 1500);
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}