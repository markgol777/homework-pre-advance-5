$('.btn-close').click(function() {
    $('.animate').animate({
        opacity: 0
    }, 2000, function() {
        $('.animate').css({display: 'none'})
        $('.textArea1').html('');
    })
})

// $('.btn1').click(function() {
//     if (parseInt($('.input-2').value) > 0) {
//         console.log('topikejtgliksajgflsjfkal;fd');
//     }
// })