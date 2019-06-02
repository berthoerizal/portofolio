$('.page-scroll').on('click', function (e) {

    //mengambil isi dari href, outputnya berupa id dari tiap href yang diclick
    var tujuan = $(this).attr('href');

    //mengambil section yang bersangkutan dengan id yang diclick
    var sectionTujuan = $(tujuan);

    //membuat animasi scroll
    $('html').animate({
        scrollTop: sectionTujuan.offset().top - 50
    }, 1000);

    e.prefentDefault();
})